import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_tZK4cNfxAwIEeKu7D5cfcDKYU5H3Z2Y",
  authDomain: "fipugram-75d1c.firebaseapp.com",
  projectId: "fipugram-75d1c",
  storageBucket: "fipugram-75d1c.appspot.com",
  messagingSenderId: "966878113585",
  appId: "1:966878113585:web:57bb4c4140566d818c4a10",
}

firebase.initializeApp(firebaseConfig)

export { firebase }
