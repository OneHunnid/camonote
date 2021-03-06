import fire from './firebaseDb'

export default function sendMessage(obj) {
  const channelName = obj.channel
  const message = obj.message
  const timestamp = obj.timestamp
  const newTimestamp = -Math.abs(timestamp)

  const newKey = fire.database().ref().child('hashtags/' + channelName).push().key;

  fire.database().ref('hashtags/' + channelName + '/' + newKey).update({
    'message': message,
    'channelName': channelName,
    'timestamp': newTimestamp
  })
}
