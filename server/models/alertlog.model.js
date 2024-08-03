const { default: mongoose } = require("mongoose");
const { alertSchema } = require("./alert.model");

const logSchema = new mongoose.Schema({
    alertDetails: {
      type: alertSchema,
      required: true
    },
    logMessage: {
      type: String,
      required: true
    },
    logLevel: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
      required: true
    }
  });

  const LogModel = mongoose.model('alertlog',logSchema)

  module.exports = LogModel