import firebase from 'firebase'


   // Initialize Firebase 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8AduljvMMVwez8n0tUwbQlv0SjIaMdaM",
    authDomain: "clone-60264.firebaseapp.com",
    databaseURL: "https://clone-60264.firebaseio.com",
    projectId: "clone-60264",
    storageBucket: "clone-60264.appspot.com",
    messagingSenderId: "782886267803",
    appId: "1:782886267803:web:25e8d39a06a70aedcccf3e",
    measurementId: "G-9QB9HKKM6B"
});

// Depends on what we want to use in our application
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

