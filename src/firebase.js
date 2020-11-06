import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDu__lr4OojlVKC-Uzo8tKEGnBLi1ugm8U",
    authDomain: "todo-list-4eed3.firebaseapp.com",
    databaseURL: "https://todo-list-4eed3.firebaseio.com",
    projectId: "todo-list-4eed3",
    storageBucket: "todo-list-4eed3.appspot.com",
    messagingSenderId: "4318810351",
    appId: "1:4318810351:web:93bcf8c971409b9c324b1a"
  });

const db = firebaseApp.firestore();

export { db };