import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB6fefiAPA_ew4AzBDfYjO1GWSEXa-MfYY",
  authDomain: "clone-1389b.firebaseapp.com",
  projectId: "clone-1389b",
  storageBucket: "clone-1389b.appspot.com",
  messagingSenderId: "697436695371",
  appId: "1:697436695371:web:0a198a125827a4302d96ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export  {db,auth} ;
