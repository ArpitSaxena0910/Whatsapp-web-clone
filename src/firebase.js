import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9V8J2fCmLuoW066NXTMLZ9zxf220CDus",
    authDomain: "whatsapp-clone-6d395.firebaseapp.com",
    projectId: "whatsapp-clone-6d395",
    storageBucket: "whatsapp-clone-6d395.appspot.com",
    messagingSenderId: "107482052033",
    appId: "1:107482052033:web:79eddae63fbe16b3e92b40",
    measurementId: "G-YX0XDJD3DG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

