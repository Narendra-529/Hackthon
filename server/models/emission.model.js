const mongoose = require("mongoose");

// Define the schema
const emissionSchema = new mongoose.Schema(
  {
    assetId: String,
    parameter: String,
    value: Number,
  },
  {
    timestamps: true, // This will add createdAt and updatedAt timestamps
  }
);

// Create the model
const Emission = mongoose.model("Emission", emissionSchema);

module.exports = Emission;
