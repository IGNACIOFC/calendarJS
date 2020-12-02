
function newEvent (title, startDate, endDate, remindTime, description, type) {
    this.title = "";
    this.startDate = new Date();
    this.endDate = new Date();
    this.remindTime = "";
    this.description = "";
    this.type = "";
}

/* let newEvent = {
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    remindTime: "",
    description: "",
    type: ""
} */

var myEvents = [];

document.getElementById("createNewEventModalButton").addEventListener("click", storeEvent, true);

function storeEvent () {
    var title = document.getElementById("eventTitle").value;
    var startDate = document.getElementById("date").value;
    var endDate = document.getElementById("endDateCalendar").value;
    var remindTime = document.getElementById("time").value;
    var description = document.getElementById("description").value;
    var type = document.getElementById("eventType").value;

    var myNewEvent = new newEvent(title, startDate, endDate, remindTime, description, type);

    /* myNewEvent.title = document.getElementById("eventTitle").value;
    myNewEvent.startDate = document.getElementById("date").value;
    myNewEvent.endDate = document.getElementById("endDateCalendar").value;
    myNewEvent.remindTime = document.getElementById("time").value;
    myNewEvent.description = document.getElementById("description").value;
    myNewEvent.type = document.getElementById("eventType").value; */

    myEvents.push(myNewEvent);

    
    localStorage.setItem("myEvents", JSON.stringify(myEvents));
    let myeventinformation;
    myeventinformation = localStorage.getItem("myEvents")
    /* alert(myeventinformation); */
    JSON.parse(myeventinformation);
    
    alert(myeventinformation[0].title.innerHTML);

    /* alert(newEvent.title);
    alert(newEvent.startDate);
    alert(newEvent.endDate);
    alert(newEvent.remindTime); */
}

function createEventContainer () {
    const element = document.createElement("p");
    let text = document.createTextNode("evento1")
    element.appendChild(text);
    
}

function showEventsInCalendar () {
    JSON.parse(myeventinformation);
    alert(myeventinformation[0].title);
}

