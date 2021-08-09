import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: .......,
    authDomain: ...........",
    projectId: ...........",
    storageBucket: ...........",
    messagingSenderId: ...........",
    appId: ...........",
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire
