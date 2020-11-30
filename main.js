var body = document.getElementById("body");
var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("button-create-new-event");
var spanClose = document.getElementsByClassName("close");

modalBtn.addEventListener("click", function() {
    console.log(modal);
    modal.style.display = "block";
    body.style.backgroundColor = "rgba(0,0,0,0.4)";
    console.log(body)
});
spanClose[0].addEventListener("click", function() {
    modal.style.display = "none";
    body.style.backgroundColor = "";
});
