var user_name;

function save_name() {
user_name = document.getElementById("input_name").value;
localStorage.setItem("User name", user_name);
console.log("User name successfully saved");

window.location = "kwitter_room.html";
console.log("Successfully navigated to kwiter room");
}