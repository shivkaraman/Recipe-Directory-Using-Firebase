import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACwiJ-dnj7zlqUKVxxAhQNtO0wcRna_94",
  authDomain: "the-tasty-table-9b54b.firebaseapp.com",
  projectId: "the-tasty-table-9b54b",
  storageBucket: "the-tasty-table-9b54b.appspot.com",
  messagingSenderId: "718658064638",
  appId: "1:718658064638:web:260cf8b1cfe99e2df015af",
  measurementId: "G-K7W5DRZ14X"
};
//Initialize firebase
firebase.initializeApp(firebaseConfig)

//Initialize services
const projectForestore = firebase.firestore()

export { projectForestore }