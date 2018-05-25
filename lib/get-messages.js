import db from './firebaseDb'

export default function getMessages(keyProp) {
  return db.collection(keyProp).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
       doc.data()
    });
  });
}
