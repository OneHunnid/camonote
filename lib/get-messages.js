import loadDB from './db';

export default async function getMessages(keyProp) {
  const db = await loadDB()
  const query = db.ref('hashtags/' + keyProp).orderByChild('timestamp')

  return query.on('value', function(snapshot) {
    return snapshot.val()
  });
}
