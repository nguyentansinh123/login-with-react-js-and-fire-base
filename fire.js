import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC-SWmV4IL5i138_dOuhvXvt3wI4ZyIdJE",
    authDomain: "auth-development-c6e93.firebaseapp.com",
    projectId: "auth-development-c6e93",
    storageBucket: "auth-development-c6e93.appspot.com",
    messagingSenderId: "807600798276",
    appId: "1:807600798276:web:ed008d3ef6871c1d11da11"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire