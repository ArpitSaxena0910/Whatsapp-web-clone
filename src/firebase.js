import firebase from "firebase";

const firebaseConfig = {
    apiKey: "****Your Key****",
    authDomain: "****Your Domain****",
    projectId: "**** Your Project ID****",
    storageBucket: "**** Your storage bucket ****",
    messagingSenderId: "**** Your Sender ID****",
    appId: "**** Your appid****",
    measurementId: "**** Your measurement ID ****"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

