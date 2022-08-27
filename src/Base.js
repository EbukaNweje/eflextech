import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTxT9qhV_Y44eip_lHs0Eb7NnTYGmORwQ",
    authDomain: "eflextech-d6da0.firebaseapp.com",
    projectId: "eflextech-d6da0",
    storageBucket: "eflextech-d6da0.appspot.com",
    messagingSenderId: "1024792991529",
    appId: "1:1024792991529:web:123f4045d30b2db6e18938"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);