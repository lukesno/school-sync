import firebase from 'firebase';

//firebase configuration for Firebase SDK
var firebaseConfig = {
    apiKey: "AIzaSyASo8ft9Zwi205u70OnRXW8K_odmuPgymg",
    authDomain: "shellhacks-d33ca.firebaseapp.com",
    databaseURL: "https://shellhacks-d33ca.firebaseio.com",
    projectId: "shellhacks-d33ca",
    storageBucket: "shellhacks-d33ca.appspot.com",
    messagingSenderId: "58443134239",
    appId: "1:58443134239:web:3f2d8b535c5be32133ec2a"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire; 