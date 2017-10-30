import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDGkCz_5_9iyTVYk7Z55yRNEa3Kbn8JM-I",
    authDomain: "boomtown-e1e45.firebaseapp.com",
    databaseURL: "https://boomtown-e1e45.firebaseio.com",
    projectId: "boomtown-e1e45",
    storageBucket: "boomtown-e1e45.appspot.com",
    messagingSenderId: "826576495952"
};

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = firebase.auth();
const FirebaseStorage = firebase.storage(FirebaseApp);
const FirebaseDB = firebase.database();

export {FirebaseApp, FirebaseAuth, FirebaseStorage, FirebaseDB};
  