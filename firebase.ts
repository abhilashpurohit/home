import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWFMcBi2rBf19gNxh7MbMw4gz7sw0RD9c",
  authDomain: "abhilashpurohit-b72f5.firebaseapp.com",
  projectId: "abhilashpurohit-b72f5",
  storageBucket: "abhilashpurohit-b72f5.firebasestorage.app",
  messagingSenderId: "744685307762",
  appId: "1:744685307762:web:9053b7f1487a360ef37feb"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();