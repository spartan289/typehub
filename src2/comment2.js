// import { async } from "@firebase/util";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBpSHAPJJMiUZolEojasZLQQFBk9mDk6EU",
//   authDomain: "cafenista-66c18.firebaseapp.com",
//   databaseURL:
//     "https://cafenista-66c18-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "cafenista-66c18",
//   storageBucket: "cafenista-66c18.appspot.com",
//   messagingSenderId: "596044648831",
//   appId: "1:596044648831:web:baedd81985c057fcfd8a4a",
//   measurementId: "G-Y8JP9FS9RL",
// };
// // // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();

// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   doc,
//   getDocs,
// } from "firebase/firestore";
// // example function
// async function getAllData(db) {
//   const doc2 = collection(db, "/comment");
//   const doc1 = await getDocs(doc2);
//   console.log(doc1.id);
//   console.log(doc2);
//   doc1.forEach(async (doc) => {
//     const coll_comment = collection(db, "/comment/" + doc.id + "/comm");
//     const comment_document = await getDocs(coll_comment);
//     comment_document.forEach((doc) => {
//       console.log(doc.data());
//     });
//     console.log(coll_comment);
//     console.log(doc.data());
//   });
// }
// // getAllData(db);
