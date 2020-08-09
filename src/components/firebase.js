import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpoTCjDMUZ5Zsd-QoPdq3JMm3JqRnSQsw",
    authDomain: "openwing-51317.firebaseapp.com",
    databaseURL: "https://openwing-51317.firebaseio.com",
    projectId: "openwing-51317",
    storageBucket: "openwing-51317.appspot.com",
    messagingSenderId: "668558022347",
    appId: "1:668558022347:web:86f889f9f7d91eb91f6d4e",
    measurementId: "G-XQY5VT35GK"
  });

  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };
//   export default db;