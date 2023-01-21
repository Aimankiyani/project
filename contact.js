// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIwaSMejUcze1iGQgtijMtFj1Vy51DGQU",
  authDomain: "ks-work-d588e.firebaseapp.com",
  projectId: "ks-work-d588e",
  storageBucket: "ks-work-d588e.appspot.com",
  messagingSenderId: "356881652239",
  appId: "1:356881652239:web:4d5af922dc6f6b057d217a",
  measurementId: "G-J1JCSMJLB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var name = document.getElementById('name');
var lname = document.getElementById('lname');
var email = document.getElementById('inputEmail4');
var down = document.getElementById('flexRadioDefault1');
var down2 = document.getElementById('flexRadioDefault2');
var num = document.getElementById('number');
var drop = document.getElementById('down23');
var drop2 = document.getElementById('flexselect');
var address = document.getElementById('floatingTextarea');
var message = document.getElementById('floatingTextarea2');

window.addValue = function(){
    var obj ={
        uname: name.value,
        ulname: lname.value,
        Gmail: email.value,
        udown: down.value,
        u_down: down2.value,
        number: num.value,
        udrop: drop.value,
        u_drop: drop2.value,
        addr: address.value,
        mess: message.value,

    };
    var uid = Math.random().toString().slice(2);
    obj.id = uid
    var reference = ref(database, `users/${obj.id}/`);
    set(reference,obj)
}