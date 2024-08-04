const mongoose = require("mongoose");

// Define the schema
const alertSchema = new mongoose.Schema(
  {
    alertName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    plant: {
      plantId: {
        type: String,
        required: true,
      },
      plantName: {
        type: String,
        required: true,
      },
    },
    location: {
      locationId: {
        type: String,
        required: true,
      },
      locationName: {
        type: String,
        required: true,
      },
    },
    asset: {
      assetId: {
        type: String,
        required: true,
      },
      assetName: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"], // Example of status values
    },
    triggers: [
      {
        element: {
          type: String,
          required: true,
        },
        type: {
          type: Number,
        },
        value: Number,
        unit: String,
        min: Number,
        max: Number,
        longerThan: Number,
        alertType: Number,
        sendTo: Number,
        users: mongoose.Schema.Types.Mixed,
      },
    ],
  },
  {
    timestamps: true, // This will add createdAt and updatedAt timestamps
  }
);

// Create the model
const Alert = mongoose.model("Alert", alertSchema);

module.exports = { Alert, alertSchema };
