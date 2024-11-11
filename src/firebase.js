import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB3aSymzL-yXbLu7-nBAyHYeU5Uoc4LXsU",
    authDomain: "drive-clone-6f769.firebaseapp.com",
    projectId: "drive-clone-6f769",
    storageBucket: "drive-clone-6f769.firebasestorage.app",
    messagingSenderId: "115883992235",
    appId: "1:115883992235:web:76d5e4b393074b85d083ee"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };