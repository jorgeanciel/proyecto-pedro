// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCtk05JtsST5P5QkkhhdNPo52RSAc5G0ZA",
  authDomain: "karaokeapp-8315f.firebaseapp.com",
  databaseURL: "https://karaokeapp-8315f-default-rtdb.firebaseio.com",
  projectId: "karaokeapp-8315f",
  storageBucket: "karaokeapp-8315f.appspot.com",
  messagingSenderId: "554100919641",
  appId: "1:554100919641:web:1764653aef41cd0984d048",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
