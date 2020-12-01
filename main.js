var body = document.getElementById("body");
var modal = document.getElementById("bgModal");
var modalBtn = document.getElementById("button-create-new-event");
var spanClose = document.getElementsByClassName("close");

modalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});
spanClose[0].addEventListener("click", function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* FORM VALIDATIONS */
const title = document.getElementById("eventTitle");
const description = document.getElementById("description");
const form = document.getElementById("form")
const errorTitle = document.getElementById("errorTitle")


form.addEventListener("submit", (e) => {
    let messages = []
    if (title.value === "" || title.value == null) {
        messages.push("title event is required")
    } if (title.value.length > 60) {
        messages.push("Title max length 60 characters")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorTitle.innerText = messages.join (", ")
    }
    
});
