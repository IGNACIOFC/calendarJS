const addEventButton = document.getElementById("createNewEventModalButton");
const createButton = document.getElementById("createNewEventModalButton");


/* function newEvent (titleValue, startDateValue, endDateValue, remindTimeValue, descriptionValue, typeValue) {
    this.title = titleValue;
    this.startDate = startDateValue;
    this.endDate = endDateValue;
    this.remindTime = remindTimeValue;
    this.description = descriptionValue;
    this.type = typeValue;
} */

document.getElementById("createNewEventModalButton").addEventListener("click", storeEvent);


function storeEvent (event) {
    event.preventDefault();
    var myEvents = [];
    var newEvent = {
        title : "",
        startDate : new Date (),
        endDate : new Date (),
        remindTime : "",
        description : "",
        type : "",
    }
    
    newEvent.title = document.getElementById("eventTitle").value;
    newEvent.startDate = document.getElementById("date").value;
    newEvent.endDate = document.getElementById("endDateCalendar").value;
    newEvent.remindTime = document.getElementById("time").value;
    newEvent.description = document.getElementById("description").value;
    newEvent.type = document.getElementById("eventType").value;

    /* var title = document.getElementById("eventTitle").value;
    var startDate = document.getElementById("date").value;
    var endDate = document.getElementById("endDateCalendar").value;
    var remindTime = document.getElementById("time").value;
    var description = document.getElementById("description").value;
    var type = document.getElementById("eventType").value;

    var myNewEvent = new newEvent(title, startDate, endDate, remindTime, description, type); */
    
    if (localStorage.getItem("myEvents") != null) {
        myEvents = JSON.parse(localStorage.getItem("myEvents"));
        myEvents.push(newEvent);
        /* myEvents.push(myNewEvent); */
        localStorage.setItem("myEvents", JSON.stringify(myEvents));
    } else {
        myEvents.push(newEvent);
        /* myEvents.push(myNewEvent); */
        localStorage.setItem("myEvents", JSON.stringify(myEvents));
    }
    modal.style.display = "none";
    d = new Date (newEvent.startDate);
    var nMonth = d.getMonth();
    showEventsInCalendar(nMonth);
}





