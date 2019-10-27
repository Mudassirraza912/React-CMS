import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD9gi4lGQGyWLXdAoETLgKsW5xX6XqVFvw",
    authDomain: "react-cms-47ad1.firebaseapp.com",
    databaseURL: "https://react-cms-47ad1.firebaseio.com",
    projectId: "react-cms-47ad1",
    storageBucket: "react-cms-47ad1.appspot.com",
    messagingSenderId: "520271882854",
    appId: "1:520271882854:web:04995df60ff48a53769ba7",
    measurementId: "G-14KFWHLLZT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;