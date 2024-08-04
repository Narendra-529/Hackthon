const {Alert} = require("../models/alert.model");
const LogModel = require("../models/alertlog.model");

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

const updateAlert = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUser = await Alert.findByIdAndUpdate(userId, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Validate before updating
    });

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function alertLogs(req,res) {
  try {
    const alerts = await LogModel.find();
    return res.status(200).json(alerts);
  } catch (err) {
    return res.status(500).json(err?.message);
  }
}
module.exports = { getAlerts, createAlert,updateAlert, alertLogs };
