import loadDB from './db';

export default async function getMessages(keyProp) {
  const db = await loadDB()
  const key = db.ref('hashtags/' + keyProp)

  return key.once('value').then(function(snapshot) {
    return snapshot.val()
  });
}
