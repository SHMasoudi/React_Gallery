// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCeS3xfjfkFJbCFTytY0GRysOu2cM6T2_s",
  authDomain: "react-gallery-89695.firebaseapp.com",
  projectId: "react-gallery-89695",
  storageBucket: "react-gallery-89695.appspot.com",
  messagingSenderId: "423553889924",
  appId: "1:423553889924:web:33a3e6eb5a80793eecf4d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// Initialize storage
const storage = getStorage(app)

export {db,storage}