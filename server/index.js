const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const notification = require("./notification/index")

const mongoose = require("mongoose");
const { createAlert, getAlerts ,updateAlert, alertLogs} = require("./services/alert.service");
const { simulateProcess } = require("./services/simulate.servce");
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/alerts", getAlerts);

app.post("/alert", createAlert);
app.post("/simulate",simulateProcess);

app.put('/alert/:id', updateAlert);

app.get('/alert/logs',alertLogs)


// Connection URL
const url = process.env.MONGODB_URI;
console.log(url)

// Connect to MongoDB
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB", url);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);

    // Handle specific error conditions
    if (error.name === "MongoNetworkError") {
      console.error("Network error occurred. Check your MongoDB server.");
    } else if (error.name === "MongooseServerSelectionError") {
      console.error(
        "Server selection error. Ensure" + " MongoDB is running and accessible."
      );
    } else {
      // Handle other types of errors
      console.error("An unexpected error occurred:", error);
    }
  });
 

// Define a schema

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});

module.exports = { app };
