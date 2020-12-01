var body = document.getElementById("body");
var modal = document.getElementById("bgModal");
var modalBtn = document.getElementById("button-create-new-event");
var spanClose = document.getElementsByClassName("close");

modalBtn.addEventListener("click", function() {
    console.log(modal);
    modal.style.display = "block";

});
spanClose[0].addEventListener("click", function() {
    modal.style.display = "none";
});
