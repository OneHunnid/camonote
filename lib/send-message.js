// import * as firebase from 'firebase'
// import 'firebase/firestore';
import db from './firebaseDb'

export default function sendMessage(obj) {
  const channelName = obj.channel
  const message = obj.message
  const timestamp = obj.timestamp

  db.collection(channelName).add({
    'message': message,
    'channelName': channelName,
    // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    'timestamp': timestamp
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}
