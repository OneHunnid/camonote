import loadDB from './db';

// create a promise that returns snapshot.val
export default async (keyProp) => {
  const searchKey = keyProp;
  const db = await loadDB()
  const key = db.ref('hashtags/' + searchKey);

  // key.on('value', function(snapshot) {
  //   console.log('firebase snapshot', snapshot.val())
  //   return snapshot.val();
  // });
}
