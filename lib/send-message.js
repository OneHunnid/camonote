import loadDB from './db';

export default async function sendMessage(obj) {
  console.log('send message obj', obj)

  const db = await loadDB()
  db.ref('allHashes').child(obj.channel).set(1);
  db.ref('hashtags/' + obj.channel).push({
    "message": obj.message,
    "hashtag": obj.channel,
    "timestamp": obj.timestamp
  })
}
