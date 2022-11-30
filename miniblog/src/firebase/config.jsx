import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY-5kauwbcrWQwe0VcJGh3PRe3vh1_XVA",
  authDomain: "miniblog-1b445.firebaseapp.com",
  projectId: "miniblog-1b445",
  storageBucket: "miniblog-1b445.appspot.com",
  messagingSenderId: "879005595187",
  appId: "1:879005595187:web:1d85929d2d97a6cf1c9546",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };