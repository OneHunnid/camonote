import loadDB from './db';

export default async function getMessages(keyProp) {
  const db = await loadDB()
  const query = db.ref('hashtags/' + keyProp).orderByChild('timestamp')

  return query.once('value').then(function(snapshot) {
    // console.log("SNAPSHOT", snapshot.val())
    return snapshot.val()
  });
}
