import { initializeApp } from 'firebase/app';
import * as fb from 'firebase/firestore'
import 'firebase/firestore'


//connect to firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyBFQ8Uu4-eXE49RckSAPcWYiyrcBuH5Hkg",
//     authDomain: "1:1056818816676:android:0496c991d8b439fae82831.firebaseapp.com",
//     databaseURL: "https://appaap-default-rtdb.firebaseio.com",
//     projectId: "joinme-423bf"
//     // storageBucket: "<BUCKET>.appspot.com",
//     // messagingSenderId: "<SENDER_ID>",
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyD4PwPac91LxWr9gdQKud-QNxIY2T64IxI",
    authDomain: "1:57913591124:android:37890ae0cead48fc5d74c1.firebaseapp.com",
    databaseURL: "https://appaap-default-rtdb.firebaseio.com",
    projectId: "appaap",
    // storageBucket: "appaap.appspot.com",
    // messagingSenderId: "57913591124",
    // appId: "1:57913591124:web:2b2b04c3a77c1f515d74c1",
    // measurementId: "G-DFZP0C227X"
  };

  const app = initializeApp(firebaseConfig);
  const db = fb.getFirestore(app);

export async function createUser(ID, Email, isUser, LettersNum) {
  // const usersRef = fb.doc (db, 'Users');  
  
  // const newUserRef = await getDocs(usersRef);  
  const newUser = {  
    ID: ID,
    Email: Email,
    isUser: isUser,
    LettersNum: LettersNum
  };
  await fb.setDoc(fb.doc(db, "Users", ID), newUser);
  // await newUserRef.set(newUser);  
  return "done";
}


// export async function createUser(ID, Email, isUser, LettersNum) {
//   const userRef = fb.doc(db, 'Users', ID)
//   const userDoc = await fb.getDoc(userRef)
//   if(userDoc.exists()){
//       await fb.updateDoc(userRef, {ID: ID})
//       await fb.updateDoc(userRef, {Email: Email})
//       await fb.updateDoc(userRef, {isUser: isUser})
//       await fb.updateDoc(userRef, {LettersNum: LettersNum})
//       return "done"
//   }
//   else{
//       console.log("error")
//   }
// }

