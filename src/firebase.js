// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByiDyL6_C-B7L0oACQ_SjV3lYKydM0Gj8",
  authDomain: "chat-monkey-29ba2.firebaseapp.com",
  projectId: "chat-monkey-29ba2",
  storageBucket: "chat-monkey-29ba2.appspot.com",
  messagingSenderId: "620977614648",
  appId: "1:620977614648:web:b1f6c90ae5bae06a5e9bcd",
  measurementId: "G-GLFRKX8EX7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const auth = getAuth(app);