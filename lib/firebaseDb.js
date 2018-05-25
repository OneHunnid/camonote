import * as firebase from 'firebase'
import 'firebase/firestore';

let config = {
  apiKey: "AIzaSyDui2hpiZaM3HUPuc5FsqH16u9d2d-8YBs",
  authDomain: "radiant-torch-2861.firebaseapp.com",
  databaseURL: "https://radiant-torch-2861.firebaseio.com",
  projectId: "radiant-torch-2861",
  storageBucket: "radiant-torch-2861.appspot.com",
  messagingSenderId: "780991627839"
}

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
