import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/storage"

export const app = firebase.initializeApp({
    "projectId": "nodamoda-yeit",
    "appId": "1:954524215196:web:db76605a30b8b1051cca59",
    "databaseURL": "https://nodamoda-yeit-default-rtdb.firebaseio.com",
    "storageBucket": "nodamoda-yeit.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBBwJmHEcYEg4kOjJ-sqWNXPkIFc7pkD9o",
    "authDomain": "nodamoda-yeit.firebaseapp.com",
    "messagingSenderId": "954524215196"
  });