const Alert = require("../models/alert.model");

const getAlerts = (req, res) => {
  try {
    return Alert.find();
  } catch (err) {
    return res.status(500).json(err?.message);
  }
};

const createAlert = (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    return newAlert;
  } catch (err) {
    return res.status(500).json(err?.message);
  }
};

module.exports = { getAlerts, createAlert };
