import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyASJRelv22nsAm72pYyDTt6osIdydxzvCc",
    authDomain: "out-rage.firebaseapp.com",
    projectId: "out-rage",
    storageBucket: "out-rage.firebasestorage.app",
    messagingSenderId: "871618982742",
    appId: "1:871618982742:web:d65d71e392fec1f61bdcf7"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  
  export default app;
