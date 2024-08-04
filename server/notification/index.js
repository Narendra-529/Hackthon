const admin = require("firebase-admin");

const serviceAccount = require("./fcmnotification.json");

const axios = require("axios");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const server_Key = process.env.SERVER_KEY;
const Token =
  process.env.TOKEN ||
  "dxBFf3VxRzi84wsAJBpGNg:APA91bFuLpHQxV-kbVNrW9ylP0-v1kANAV-V0xYzcV3Y7tW1n_JdNmmjZ_vvNPzcUkzGWKgTP6EEx6od_WPjI-h792PUiIZ0WKiovmd3HSssgfUfr3O_AV5wtH-cSqqOIK8WfaVTU8Qr";
const sendNotification = async (message, token = Token) => {
  const payload = {
    notification: {
      title: message.title,
      body: message.body,
    },
    registration_ids: [token],
  };
  try {
    const response = await axios.post(
      "https://fcm.googleapis.com/fcm/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=${server_Key}`,
        },
      }
    );
    console.log("Successfully sent message:", response.data);
  } catch (error) {
    console.error(
      "Error sending message:",
      error.response ? error.response.data : error.message
    );
  }

};


module.exports = { sendNotification };
