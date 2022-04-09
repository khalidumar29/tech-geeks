import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQogPbsq-LVwBX8lkWzNpB9Qq8eqsW1aE",
  authDomain: "tech-geeks-2c1ba.firebaseapp.com",
  projectId: "tech-geeks-2c1ba",
  storageBucket: "tech-geeks-2c1ba.appspot.com",
  messagingSenderId: "1037938092774",
  appId: "1:1037938092774:web:04e9948851b53a8baca927",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
