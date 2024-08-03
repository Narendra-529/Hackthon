const admin = require('firebase-admin');

const serviceAccount = require('./fcmnotification.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const sendNotification = (token, message) => {
  const payload = {
    notification: {
      title: message.title,
      body: message.body,
      
    },
    "android": {
"notification": {
"sound": "default",
icon: "./icons8-alert-50.png"
}
},
    token: token,

  };

  // admin.messaging().sendToDevice(token, payload)
  //   .then(response => {
  //     console.log('Successfully sent message:', response);
  //   })
  //   .catch(error => {
  //     console.log('Error sending message:', error);
  //   });
  admin.messaging().send(payload)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
};

// Example usage
const token = 'dxBFf3VxRzi84wsAJBpGNg:APA91bFuLpHQxV-kbVNrW9ylP0-v1kANAV-V0xYzcV3Y7tW1n_JdNmmjZ_vvNPzcUkzGWKgTP6EEx6od_WPjI-h792PUiIZ0WKiovmd3HSssgfUfr3O_AV5wtH-cSqqOIK8WfaVTU8Qr';
const message = {
  "body" : "Body of Your Notification in Data",
     "title": "mRound Title",
  title: 'Hello',
  body: 'This is a test notification',
  icon:"https://images.pexels.com/photos/27008964/pexels-photo-27008964/free-photo-of-a-tree-is-sitting-on-the-shore-of-a-lake.jpeg"};


sendNotification(token, message);
