import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbQnSj_yjRxVejITnWCi1dncpuIsjZgpI",
  authDomain: "venovet-78743.firebaseapp.com",
  projectId: "venovet-78743",
  storageBucket: "venovet-78743.appspot.com",
  messagingSenderId: "196981794605",
  appId: "1:196981794605:web:afeea87eee309479ac55a4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
