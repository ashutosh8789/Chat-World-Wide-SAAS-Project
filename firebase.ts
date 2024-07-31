import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
    apiKey: "AIzaSyBDR7Zax8QYwbeDjBcv03I_wisdGLxUuNo",
    authDomain: "saas-translator-app-project.firebaseapp.com",
    projectId: "saas-translator-app-project",
    storageBucket: "saas-translator-app-project.appspot.com",
    messagingSenderId: "136640388916",
    appId: "1:136640388916:web:68bd53a42615b8f5c7cf61"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };