// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQgf-U5nZieRUdBEC97sdeOKDkAWwktY",
  authDomain: "m-51-auth.firebaseapp.com",
  projectId: "m-51-auth",
  storageBucket: "m-51-auth.appspot.com",
  messagingSenderId: "1007904143883",
  appId: "1:1007904143883:web:a25694a228ae68c234250e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;