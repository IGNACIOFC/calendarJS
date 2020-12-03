var body = document.getElementById("body");
var modal = document.getElementById("bgModal");
var modalBtn = document.getElementById("button-create-new-event");
var spanClose = document.getElementsByClassName("close");
var cancelBtn = document.getElementById("cancelBtn");

var eventModal = document.getElementById("eventModal");
var eventP = document.getElementById("eventP");
var closeEventButton = document.getElementsByClassName("closeEvent");

modalBtn.addEventListener("click", function() {
    modal.style.display = "block";
    document.getElementById("date").value = Date;
});
spanClose[0].addEventListener("click", function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

cancelBtn.addEventListener("click", function(){
    modal.style.display = "none";
});


/* EVENT MODAL */
/*
eventP.addEventListener("click", function(){
    eventModal.style.display = "block";
})
*/

closeEventButton[0].addEventListener("click", function(){
    eventModal.style.display = "none";
});
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

/* CHECKBOX */

var checkboxDate = document.getElementById("endDateCheck");
var endDate = document.getElementById("endDateCalendar");
var endDateLabel = document.getElementById("endDateLabel");
var timeSelect = document.getElementById("timeSelect");
var remainder = document.getElementById("remainder");

checkboxDate.addEventListener("click", function(){
    if (checkboxDate.checked == true) {
        endDate.style.display = "block";
        endDateLabel.style.display ="block";
    } else {
        endDate.style.display = "none";
        endDateLabel.style.display ="none";
    }
})

remainder.addEventListener("click", function(){
    if (remainder.checked == true) {
        timeSelect.style.display = "block";
    } else {
        timeSelect.style.display = "none";
    }
})

