
//import firebase functions
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBhjH9q1purgmrXqNYCXn8QoiaFBNdIzvw",
  authDomain: "mario-project-firebase.firebaseapp.com",
  databaseURL: "https://mario-project-firebase.firebaseio.com",
  projectId: "mario-project-firebase",
  storageBucket: "mario-project-firebase.appspot.com",
  messagingSenderId: "230572361417"
};

firebase.initializeApp(config);
//required in new update: 
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;