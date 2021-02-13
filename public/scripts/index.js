const firebase = require("firebase");
// Required for side-effects

require("firebase/firestore");
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDekJ8mab9foGVBuwujN6xTsDVimkdHvWQ",
    authDomain: "blog2021-1a068.firebaseapp.com",
    projectId: "blog2021-1a068",
    storageBucket: "blog2021-1a068.appspot.com",
    messagingSenderId: "349711978886",
    appId: "1:349711978886:web:d2ee9e5dd73c405a595c07",
    measurementId: "G-GMTRB87YBW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();