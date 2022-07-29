import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCx3KI4dzHIO4ElsKO6N7MeP1n8Jq-Uw9I",
  authDomain: "chatapp-46f38.firebaseapp.com",
  projectId: "chatapp-46f38",
  storageBucket: "chatapp-46f38.appspot.com",
  messagingSenderId: "47019290366",
  appId: "1:47019290366:web:06a7c2370972072729bfaf",
  measurementId: "G-81JZ26DH5J"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export{auth,db}