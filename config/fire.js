import firebase from 'firebase';

//firebase configuration for Firebase SDK
var firebaseConfig = {
    apiKey: "AIzaSyBig31UCzwScQOVOOhfdYReZQbu4WAC2sY",
    authDomain: "shellhacks-firebase-auth.firebaseapp.com",
    databaseURL: "https://shellhacks-firebase-auth.firebaseio.com",
    projectId: "shellhacks-firebase-auth",
    storageBucket: "shellhacks-firebase-auth.appspot.com",
    messagingSenderId: "935368673348",
    appId: "1:935368673348:web:c543780fe59fa257ca5411"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;