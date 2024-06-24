import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAhTsKICIh71J0Fdiu9gKHl9QVn8yfWXyE",
  authDomain: "blogs-26c6e.firebaseapp.com",
  projectId: "blogs-26c6e",
  storageBucket: "blogs-26c6e.appspot.com",
  messagingSenderId: "529987130991",
  appId: "1:529987130991:web:01329d429ea02049ab5f9a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);