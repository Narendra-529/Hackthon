const { Alert } = require("../models/alert.model");
const LogModel = require("../models/alertlog.model");
const Emission = require("../models/emission.model");
const { sendNotification } = require("../notification");

async function simulateProcess(req, res) {
  let { parameter, equipment, value } = req.body;
  function generateRecords(value) {
    const records = [];
    let timestamp = Date.now() - 60 * 60 * 1000;

    // Generate 30 records with value 62
    for (let i = 0; i < 30; i++) {
      timestamp += 60 * 1000;
      const record = {
        parameter: parameter,
        value: value,
        equipment: equipment,
        insertedAt: timestamp,
      };
      records.push(record);
    }

    // Generate 30 records with value between 50 and 70 (excluding 62)
    for (let i = 0; i < 30; i++) {
      let tempvalue;
      do {
        tempvalue = Math.floor(Math.random() * 21) + (value - 10); // Generates a number between 50 and 70
      } while (tempvalue === value);
      timestamp += 60 * 1000;
      const record = {
        parameter: parameter,
        equipment: equipment,
        insertedAt: timestamp,
        value: tempvalue,
      };
      records.push(record);
    }

    return records;
  }

  function calculateMedian(records) {
    // Extract values from records
    const values = records.map((record) => record.value);

    // Sort the values in ascending order
    values.sort((a, b) => a - b);

    const mid = Math.floor(values.length / 2);

    // Calculate median
    if (values.length % 2 === 0) {
      // If even, average the two middle values
      return (values[mid - 1] + values[mid]) / 2;
    } else {
      // If odd, return the middle value
      return values[mid];
    }
  }

  const records = generateRecords(value);
  const medianValue = calculateMedian(records);

  function checkValues(records, excludeMin, excludeMax) {
    let countOutsideRange = 0;
    let countLessThanExcludeMin = 0;
    let countGreaterThanExcludeMax = 0;

    for (const record of records) {
      if (record.value < excludeMin) {
        countLessThanExcludeMin++;
        countOutsideRange++;
      } else if (record.value > excludeMax) {
        countGreaterThanExcludeMax++;
        countOutsideRange++;
      }
    }

    return {
      countLessThanExcludeMin,
      countGreaterThanExcludeMax,
      countOutsideRange,
    };
  }

  

  let dbRecords = await Alert.find({
    "asset.assetId": equipment,
    "triggers.0.element": parameter,
  }).lean();
  console.log(dbRecords, equipment, medianValue);

  async function processRecords(dbRecords, medianValue, records) {
    for (const rec of dbRecords) {
      for (const trigger of rec.triggers) {
        let payload = {
          title: `${rec.alertName} for ${rec.asset?.assetName} in ${rec.location.locationName}`,
          body: `${trigger.element} emissions has reached the Danger level, Please evacuate the ${rec.asset?.assetName} premises`,
        };

        if (trigger.type == 2 && medianValue <= trigger.value) {
          console.log("inside", trigger.type);
          await sendNotification(payload);
        //   await LogAlertDetails(rec, payload);
        } else if (trigger.type == 1 && medianValue >= trigger.value) {
          console.log("inside", trigger.type);
          await sendNotification(payload);
        //   await LogAlertDetails(rec, payload);
        } else if (trigger.type == 3) {
          console.log("inside", trigger.type);
          const { countOutsideRange } = checkValues(
            records,
            trigger.min,
            trigger.max
          );
          if (countOutsideRange > records.length / 2) {
            await sendNotification(payload);
            // await LogAlertDetails(rec, payload);
          }
        }
      }
    }

    // Add the next lines of code here that you want to execute after the loops
  }
  await processRecords(dbRecords, medianValue, records);

  return res.json("success");
}

async function createEmission(req, res) {
  try {
    const record = await new Emission(req.body).save();
    return res.json(record);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
}



module.exports = { simulateProcess, createEmission };
