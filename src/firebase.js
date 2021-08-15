import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1cv_WBReRe_9Bj5txizrul2bSlLO3vVc",
    authDomain: "clone-a0322.firebaseapp.com",
    projectId: "clone-a0322",
    storageBucket: "clone-a0322.appspot.com",
    messagingSenderId: "1048917619095",
    appId: "1:1048917619095:web:ac946ef8c526e8318794d2"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
