// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0WZ3LQU9Bgwb5-BJbVIWmZWIJ_8JtcJM",
  authDomain: "chill-game-review.firebaseapp.com",
  projectId: "chill-game-review",
  storageBucket: "chill-game-review.firebasestorage.app",
  messagingSenderId: "437043164289",
  appId: "1:437043164289:web:edd38ebbf61f60e82ac980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
