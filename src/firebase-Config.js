
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCkci-jcQpRHEDc8IPbfkEtQsnMjJyQNXc",
  authDomain: "gym-guide-b4023.firebaseapp.com",
  projectId: "gym-guide-b4023",
  storageBucket: "gym-guide-b4023.appspot.com",
  messagingSenderId: "730137826088",
  appId: "1:730137826088:web:854bbfc4d74e84215d761d",
  measurementId: "G-WKC7CFMH02"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider =new GoogleAuthProvider()