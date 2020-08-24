// Your web app's Firebase configuration


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCy7eoX51dHGoKOkYoEGPLaSMbtMxRleE4",
  authDomain: "myfirstwebpage-f9f41.firebaseapp.com",
  databaseURL: "https://myfirstwebpage-f9f41.firebaseio.com",
  projectId: "myfirstwebpage-f9f41",
  storageBucket: "myfirstwebpage-f9f41.appspot.com",
  messagingSenderId: "36354233742",
  appId: "1:36354233742:web:b25ae205e2a90bcc85c0df",
  measurementId: "G-TG7TXS93KW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
var messagesRef = firebase.database().ref ('myfirstwebpage');
function submitForm(){
  //   event.preventDefault();
  console.log("in");

  
      var name = document.getElementById('name').value;
      var email= document.getElementById('email').value;
      var number= document.getElementById('message').value;
      saveMessage(name, email, message);
  }
  function saveMessage( name, email, message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email: email,
        message: message,
      })
  }

  AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
  });