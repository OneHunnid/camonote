import db from './firebaseDb'

export default function sendMessage(obj) {
  const channelName = obj.channel
  const message = obj.message
  const timestamp = obj.timestamp

  db.collection(channelName).add({
    'message': message,
    'channelName': channelName,
    'timestamp': timestamp
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

  // db.collection('channelList').doc(channelName).collection('messages').doc('message1').set({
  //   'message': message,
  //   'channelName': channelName,
  //   'timestamp': timestamp
  // })
  // .then(function(docRef) {
  //   console.log("Document written with ID: ", docRef.id);
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
}
