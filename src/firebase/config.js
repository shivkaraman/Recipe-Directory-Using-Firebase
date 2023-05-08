import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdCnEoNwbkw1_nsKL9a2AqQEE1gbXUY-4",
    authDomain: "recipe-directory-6b00c.firebaseapp.com",
    projectId: "recipe-directory-6b00c",
    storageBucket: "recipe-directory-6b00c.appspot.com",
    messagingSenderId: "26867401507",
    appId: "1:26867401507:web:79221830cc4f901fa78296",
    measurementId: "G-47WKBPPY7M"
};

//Initialize firebase
firebase.initializeApp(firebaseConfig)

//Initialize services
const projectForestore = firebase.firestore()

export { projectForestore }