// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlFiuxeSKeboXLUvU9QV5VrO_j6XjjVsM",
  authDomain: "facebook-clone-9b954.firebaseapp.com",
  projectId: "facebook-clone-9b954",
  storageBucket: "facebook-clone-9b954.firebasestorage.app",
  messagingSenderId: "1001938063344",
  appId: "1:1001938063344:web:b21b2b7b6b5f7a332b1735",
  measurementId: "G-Q1HRKFG9PY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
