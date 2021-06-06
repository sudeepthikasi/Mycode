
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD4WAzwzru-mTYf0SWR_3NUL7HsneaEMgY",
      authDomain: "kwitter-app-ddaf4.firebaseapp.com",
      databaseURL: "https://kwitter-app-ddaf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-ddaf4",
      storageBucket: "kwitter-app-ddaf4.appspot.com",
      messagingSenderId: "734892010383",
      appId: "1:734892010383:web:a066b9ffc4b598f25439fa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);





    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
