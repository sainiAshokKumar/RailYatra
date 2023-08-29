
// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// import { getDatabase,get,set,child,ref,DataSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

import { initializeApp } from "firebase/app";
import { getDatabase,get,set,child,ref, DataSnapshot } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://practice-33c66-default-rtdb.firebaseio.com/",
};

// let source=document.getElementById('source');
// let dest=document.getElementById('destination');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
let name;
let count=1;
const dbref=ref(db);
console.log("Hello");
get(child(dbref,"Company/")).then((snapshot)=>{
    console.log("Inside");
    if(snapshot.exists()){
        name=snapshot.val();
        console.log(name);
    }
    else{
        console.log("No data Foound");
    }
})
.catch((error)=>{
    console.log("Unsucessful");
});