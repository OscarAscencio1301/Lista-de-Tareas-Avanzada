import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACAbGF66NACm4_qu7Cr8rnwuqHxkb8cPs",
    authDomain: "app-notas-aba06.firebaseapp.com",
    projectId: "app-notas-aba06",
    storageBucket: "app-notas-aba06.appspot.com",
    messagingSenderId: "712296400542",
    appId: "1:712296400542:web:a8ecea4d2d4e68a4ee9d8f",
    measurementId: "G-PLFWJ139NG"
}
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

const google = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    db,
    google
}