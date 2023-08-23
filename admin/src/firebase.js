import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDIozyg8SykfMZwB9rKNeIOEQ_mgkXpAOM",
  authDomain: "netflix-dc7c5.firebaseapp.com",
  projectId: "netflix-dc7c5",
  storageBucket: "netflix-dc7c5.appspot.com",
  messagingSenderId: "203351339691",
  appId: "1:203351339691:web:77ed52fd05daf1021f3dee",
  measurementId: "G-0TF3TCVX2Y"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export default storage;