// import db from './firebaseDb'
//
// export default function getMessages(keyProp) {
//   return db.collection(keyProp).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//        doc.data()
//     });
//   });
// }

import fire from './firebaseDb'

// export default function getMessage() {
//   fire.database().ref('/hashtags/' + this.props.channelName).once('value').then(function(snapshot) {
//     return console.log(snapshot.val())
//   });
// }

fire.database().ref('/hashtags/' ).once('value').then(function(snapshot) {
  return console.log(snapshot.val())
});
