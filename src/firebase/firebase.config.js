// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjBPXAlLG3KjWeGS2OPulonSz2nqGRcAE",
  authDomain: "summer-camp-language-club.firebaseapp.com",
  projectId: "summer-camp-language-club",
  storageBucket: "summer-camp-language-club.appspot.com",
  messagingSenderId: "877920830592",
  appId: "1:877920830592:web:146e8367c8420a771f9265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;