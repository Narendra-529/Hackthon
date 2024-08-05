// const records = [];
// let count = 0;

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function addRecord() {
//   let value;
//   if (count < 5) {
//     // First 5 records: values less than 50
//     value = getRandomInt(40, 49);
//   } else if (count < 10) {
//     // Next 5 records: values more than 50 and less than 60
//     value = getRandomInt(51, 59);
//   } else {
//     // Subsequent records: values between 40 and 60
//     value = getRandomInt(40, 60);
//   }
  
//   records.push({ id: count + 1, value });
//   console.log(`Record added: { id: ${count + 1}, value: ${value} }`);
//   count++;
  
//   if (count >= 15) {
//     clearInterval(interval);
//     console.log('Final records:', records);
//   }
// }

// // Insert a record every 1.5 seconds
// const interval = setInterval(addRecord, 1500);


const mongoose = require('mongoose');
require("dotenv").config();

const Record = require('./models/emission.model');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI,{})
  .then(() => {
    console.log('Connected to MongoDB');
    startInsertingRecords();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

let count = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to handle new records synchronously
// const queue = async.queue(async (doc, callback) => {
//   try {
//     await processRecord(doc);
//     callback();
//   } catch (err) {
//     callback(err);
//   }
// }, 1); // Concurrency of 1 ensures synchronous processing



// async function processRecord(doc) {
//   // Simulate a 1-second processing time
//   return new Promise(resolve => setTimeout(() => {
//     console.log('Processed record:', doc);
//     resolve();
//   }, 1000));
// }

let interval;

function addRecord() {
  let value;
  if (count < 5) {
    // First 5 records: values less than 50
    value = getRandomInt(40, 49);
  } else if (count < 10) {
    // Next 5 records: values more than 50 and less than 60
    value = getRandomInt(51, 59);
  } else {
    // Subsequent records: values between 40 and 60
    value = getRandomInt(40, 60);
  }

  const record = new Record({
    parameter: `CH4 Emission level`,
    value: value,
    assetId: `sdfsdfsasd2`,
  });

  record.save()
    .then(doc => {
      console.log(`Record added: ${doc}`);
      count++;
      if (count >= 15) {
        clearInterval(interval);
        console.log('Finished adding records');
        mongoose.connection.close();
      }
    })
    .catch(err => {
        count++;
      console.error('Error adding record', err);
    });
}

// Insert a record every 1.5 seconds
function startInsertingRecords() {
  interval =  setInterval(addRecord, 1500);
}
