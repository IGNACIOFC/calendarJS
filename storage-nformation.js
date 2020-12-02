
function newEvent (titleValue, startDateValue, endDateValue, remindTimeValue, descriptionValue, typeValue) {
    this.title = titleValue;
    this.startDate = startDateValue;
    this.endDate = endDateValue;
    this.remindTime = remindTimeValue;
    this.description = descriptionValue;
    this.type = typeValue;
}

var myEvents = [];

document.getElementById("createNewEventModalButton").addEventListener("click", storeEvent);

function storeEvent (event) {
    event.preventDefault();

    var title = document.getElementById("eventTitle").value;
    var startDate = document.getElementById("date").value;
    var endDate = document.getElementById("endDateCalendar").value;
    var remindTime = document.getElementById("time").value;
    var description = document.getElementById("description").value;
    var type = document.getElementById("eventType").value;

    var myNewEvent = new newEvent(title, startDate, endDate, remindTime, description, type);

    myEvents.push(myNewEvent);

    localStorage.setItem("myEvents", JSON.stringify(myEvents));

    let myeventinformation = localStorage.getItem("myEvents");
    allMyEvents = JSON.parse(myeventinformation);
    
    
}


