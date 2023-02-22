import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaNT2uZcrpTusJxT3ItSyRUMDTVDY3sjU",
  authDomain: "rozeclothing-e006e.firebaseapp.com",
  projectId: "rozeclothing-e006e",
  storageBucket: "rozeclothing-e006e.appspot.com",
  messagingSenderId: "445281866880",
  appId: "1:445281866880:web:1a3d213159ed9941ef0265"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);