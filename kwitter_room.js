// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDbfe7sjbfY3ack_iLAEp84QWoiQ_CYiQY",
      authDomain: "kwitterakshit.firebaseapp.com",
      databaseURL: "https://kwitterakshit-default-rtdb.firebaseio.com",
      projectId: "kwitterakshit",
      storageBucket: "kwitterakshit.appspot.com",
      messagingSenderId: "41193646220",
      appId: "1:41193646220:web:367aa3a021206acb61f3a9"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function logout(){
      window.location = "index.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
