import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8i9OoVgxycm2uZ0XBfvCnRa3A-L8nn-E",
  authDomain: "expenses-7a9d4.firebaseapp.com",
  projectId: "expenses-7a9d4",
  storageBucket: "expenses-7a9d4.appspot.com",
  messagingSenderId: "6251497442",
  appId: "1:6251497442:web:d3374d117d31363ff15bbb",
  measurementId: "G-E0Y52E5LYX"
};



initializeApp(firebaseConfig);

const db = getFirestore();
export default db