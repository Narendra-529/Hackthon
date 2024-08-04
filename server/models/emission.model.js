const mongoose = require("mongoose");
const { handleNewRecord } = require("../handle");

// Define the schema
const emissionSchema = new mongoose.Schema(
  {
    assetId: String,
    parameter: String,
    value: Number,
    insertedAt:Number,
    longerTime:Number
  },
  {
    timestamps: true, // This will add createdAt and updatedAt timestamps
  }
);

emissionSchema.post('save', function(doc, next) {
  handleNewRecord(doc._doc)
    .then(() => next())
    .catch(err => next(err));
});

// Create the model
const Emission = mongoose.model("Emission", emissionSchema);


module.exports = Emission;
