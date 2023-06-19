// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCu-gUJY-bBPNUsXXqAbU_6uQ_i-BDEDts",
	authDomain: "jewel-mobile.firebaseapp.com",
	projectId: "jewel-mobile",
	storageBucket: "jewel-mobile.appspot.com",
	messagingSenderId: "239056270208",
	appId: "1:239056270208:web:57bcad5a97240d75104765",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
