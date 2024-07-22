// src/firebase/client.ts
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBt37kQ97OcpxFSyaPeLQ_lVYLPbn25qzc",
    authDomain: "our-noticeboard.firebaseapp.com",
    projectId: "our-noticeboard",
    storageBucket: "our-noticeboard.appspot.com",
    messagingSenderId: "474237843673",
    appId: "1:474237843673:web:0c3d69b5400833d037e6c8",
    measurementId: "G-DRCVFCG140",
};

const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);

export { projectAuth, signInAnonymously, onAuthStateChanged };
