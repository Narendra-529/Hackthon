const admin = require("firebase-admin");

const serviceAccount = require("./fcmnotification2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



const Token = process.env.TOKEN || "dxBFf3VxRzi84wsAJBpGNg:APA91bFuLpHQxV-kbVNrW9ylP0-v1kANAV-V0xYzcV3Y7tW1n_JdNmmjZ_vvNPzcUkzGWKgTP6EEx6od_WPjI-h792PUiIZ0WKiovmd3HSssgfUfr3O_AV5wtH-cSqqOIK8WfaVTU8Qr"
const sendNotification = (message, token = Token) => {
  const payload = {
    notification: {
      title: message.title,
      body: message.body,
    },
    token: token,
  };

  console.log(payload)

  admin
    .messaging()
    .send(payload)
    .then((response) => {
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      console.log("Error sending message:", error);
    });
};

sendNotification({title:'aaa',body:'aaa'})

module.exports = { sendNotification };
