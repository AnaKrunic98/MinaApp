import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version

var firebaseConfig = {
    apiKey: 'AIzaSyDGypIG7ZRI8SX0QvwRWzWHpciwId8QkQ8',
    authDomain: 'minaapp-84603.firebaseapp.com',
    projectId: 'minaapp-84603',
    storageBucket: 'minaapp-84603.appspot.com',
    messagingSenderId: '346951131767',
    appId: '1:346951131767:web:fe3906ad6588cbaba89c72',
    //databaseURL: "https://minaapp-84603-default-rtdb.europe-west1.firebasedatabase.app",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);