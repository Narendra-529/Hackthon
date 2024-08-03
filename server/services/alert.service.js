const {Alert} = require("../models/alert.model");

const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find();
    return res.status(200).json(alerts);
  } catch (err) {
    return res.status(500).json(err?.message);
  }
};

const createAlert = async (req, res) => {
  try {
    const newAlert = await new Alert(req.body).save();
    return res.status(200).json(newAlert);
  } catch (err) {
    return res.status(500).json(err?.message);
  }
};

module.exports = { getAlerts, createAlert };
