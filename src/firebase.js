import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJ5geZEY0bvoVhWOZ3RUR9g603bqmQw2w",
  authDomain: "todoapp-733dc.firebaseapp.com",
  projectId: "todoapp-733dc",
  storageBucket: "todoapp-733dc.appspot.com",
  messagingSenderId: "1090955469104",
  appId: "1:1090955469104:web:654c851866066789a4e8f5",
  measurementId: "G-VLM37X2PBZ",
});

const db = firebaseApp.firestore();

export default db;
