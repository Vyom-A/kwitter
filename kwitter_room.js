const firebaseConfig = {
    apiKey: "AIzaSyBjdlAajRrbqDchuJnnn4y61e5FjzjqEAk",
    authDomain: "kwitter-cf27f.firebaseapp.com",
    databaseURL: "https://kwitter-cf27f-default-rtdb.firebaseio.com",
    projectId: "kwitter-cf27f",
    storageBucket: "kwitter-cf27f.appspot.com",
    messagingSenderId: "530234423209",
    appId: "1:530234423209:web:dd8a6e3701d3d5a06976b8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function set_text() {
var user_name = localStorage.getItem("User name");
document.getElementById("text").innerHTML = "Welcome " + user_name + "!"
console.log("Name taken");
}

function add_room() {
var room_name  = document.getElementById("room_input").value;
console.log("Room name taken");
firebase.database().ref("/").child(room_name).update({
    purpose : "add room name"
    });
window.location = "kwitter_page.html";
}

    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    
    console.log("room_names"+Room_names);
var row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row ;

    //End code
    });});}
    getData();
    
    function redirecttoroomname(name){
        console.log("name");
        localStorage.setItem("room_name",room_name);
        window.location = "kwitter_page.html";
        }