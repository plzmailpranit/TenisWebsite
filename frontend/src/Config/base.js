import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDb8NFnbl-_KqN6aXsA0KGehj_vz3xnyoo",
    authDomain: "swsc-tennis.firebaseapp.com",
    databaseURL: "https://swsc-tennis.firebaseio.com",
    projectId: "swsc-tennis",
    storageBucket: "swsc-tennis.appspot.com",
    messagingSenderId: "815076294925",
    appId: "1:815076294925:web:8e4441ba05c8c211bcb044",
    measurementId: "G-2VCJ6KNMB7"
});

export default app;