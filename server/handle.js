const async = require("async");
const { Alert } = require("./models/alert.model");
const { sendNotification } = require("./notification");

const queue = async.queue(async (doc, callback) => {
  try {
    await processRecord(doc);
    //   callback();
  } catch (err) {
    console.log(err);
    //   callback(err);
  }
}, 1); // Concurrency of 1 ensures synchronous processing

function findTimeDifferenceBetweenRecords(timestamp1, timestamp2) {
  try {
    const timeDifference = Math.abs(
      new Date(timestamp1) - new Date(timestamp2)
    );

    console.log(
      `Time difference between records is ${timeDifference} milliseconds.`
    );
    return timeDifference;
  } catch (err) {
    console.error("Error fetching records:", err);
  }
}

async function processRecord(doc) {
  // Simulate a 1-second processing time
  let dbRecords = await Alert.find({
    "asset.assetId": doc.assetId,
    "triggers.0.element": doc.parameter,
  }).lean();
  //   const checkValue = doc.value;
  for (const rec of dbRecords) {
    for (const trigger of rec.triggers) {
      let payload = {
        title: `${rec.alertName} - ${rec.asset?.assetName} in ${rec.location.locationName}`,
        body: `${trigger.element} emissions has reached the Danger level, Please evacuate the ${rec.asset?.assetName} premises`,
      };

      if (trigger.type == 2) {
        if (doc.value < trigger.value) {
          if (rec.lastPointTime) {
            let diff = findTimeDifferenceBetweenRecords(
              doc.createdAt,
              rec.lastPointTime
            );
            if (diff > doc.longerTime) {
              await sendNotification(payload);
              await Alert.findByIdAndUpdate(rec._id, { lastPointTime: null });
              console.log(diff, "ffff");
            }
          } else {
            await Alert.findByIdAndUpdate(rec._id, {
              lastPointTime: Date.now(),
            });
          }
        } else {
          await Alert.findByIdAndUpdate(rec._id, { lastPointTime: null });
        }
      }

      if (trigger.type == 1) {
        if (doc.value > trigger.value) {
          if (rec.lastPointTime) {
            let diff = findTimeDifferenceBetweenRecords(
              doc.createdAt,
              rec.lastPointTime
            );
            if (diff > doc.longerTime) {
              await sendNotification(payload);
              await Alert.findByIdAndUpdate(rec._id, { lastPointTime: null });
              console.log(diff, "ffff");
            }
          } else {
            await Alert.findByIdAndUpdate(rec._id, {
              lastPointTime: Date.now(),
            });
          }
        } else {
          await Alert.findByIdAndUpdate(rec._id, { lastPointTime: null });
        }
      }
      //  else if (trigger.type == 3) {
      // //       console.log('inside',trigger.type)
      // //     const { countOutsideRange } = checkValues(records, trigger.min, trigger.max);
      // //     if (countOutsideRange > (records.length / 2)) {
      // //       await sendNotification(payload);
      // //       await LogAlertDetails(rec, payload);
      // //     }
      // //   }
      //   }
    }
  }
  return;
  // return new Promise(resolve => setTimeout(() => {
  //   console.log('Processed record:', doc);
  //   resolve();
  // }, 3000));
}

async function handleNewRecord(doc) {
  return new Promise((resolve, reject) => {
    queue.push(doc, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = { handleNewRecord };
