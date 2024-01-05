// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFdAK0Lyqp-TtlKosBXuYwCkJt-yPisXI",
  authDomain: "trueshop-ca471.firebaseapp.com",
  projectId: "trueshop-ca471",
  storageBucket: "trueshop-ca471.appspot.com",
  messagingSenderId: "51167624943",
  appId: "1:51167624943:web:2286c8c275f849eeb1251a",
  measurementId: "G-QBCJD1SXXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);