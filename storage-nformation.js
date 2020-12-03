const addEventButton = document.getElementById("createNewEventModalButton");
const createButton = document.getElementById("createNewEventModalButton");

document.getElementById("createNewEventModalButton").addEventListener("click", storeEvent);


function storeEvent (event) {
    event.preventDefault();
    var myEvents = [];
    var newEvent = {
        title : "",
        startDate : new Date (),
        endDate : new Date (),
        remind : false,
        remindTime : "",
        description : "",
        type : "",
    }
    
    newEvent.title = document.getElementById("eventTitle").value;
    newEvent.startDate = document.getElementById("date").value;
    
    newEvent.remindTime = document.getElementById("time").value;
    newEvent.description = document.getElementById("description").value;
    newEvent.type = document.getElementById("eventType").value;
    if (document.getElementById("remainder").checked) {
        newEvent.remind = true;
    } else { newEvent.remind = false; }
    if (document.getElementById("endDateCheck").checked) {
        newEvent.endDate = document.getElementById("endDateCalendar").value;
    } else { newEvent.endDate = "" }

    
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





