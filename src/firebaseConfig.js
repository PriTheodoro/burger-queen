import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWjsmeldH76KpoJDnjCaHzpEekcuqLqv4",
  authDomain: "burger-queen-p29a.firebaseapp.com",
  databaseURL: "https://burger-queen-p29a.firebaseio.com",
  projectId: "burger-queen-p29a",
  storageBucket: "burger-queen-p29a.appspot.com",
  messagingSenderId: "255677635222",
  appId: "1:255677635222:web:c199331aef042ae2"
};
firebase.initializeApp(firebaseConfig);

export default firebase;