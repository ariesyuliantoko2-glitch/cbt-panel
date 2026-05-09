import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyAgPVqy9ibS6ix8Xkrx8hlLBCWsEygJ4U",
  authDomain: "edutechexam-efdd2.firebaseapp.com",
  projectId: "edutechexam-efdd2",
  storageBucket: "edutechexam-efdd2.firebasestorage.app",
  messagingSenderId: "374583419394",
  appId: "1:374583419394:web:e5fdad55860c6a0167fd1b"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };