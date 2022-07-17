function nm(){
    document.body.style.backgroundColor = "black"
    document.getElementById("main").style.color = "green";
    document.getElementById("Projects").style.color = "black";
}
    
function dm(){
    document.body.style.backgroundColor = "white"
    document.getElementById("main").style.color = "black";
}

//modal

const modalOne = document.getElementById("navModal");
modalOne.style.display = "none";

// Get the button that opens the modal
const btnOne = document.getElementById("nav");

// Get the <span> element that closes the modal
const spanOne = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalOne.style.display = "none";
}