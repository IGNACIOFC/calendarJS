var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("button-create-new-event");
var spanClose = document.getElementsByClassName("close")[0];

modalBtn.addEventListener("click", function() {
    modal.style.display = block;
});
spanClose.addEventListener("click", function() {
    modal.style.display = none;
});

