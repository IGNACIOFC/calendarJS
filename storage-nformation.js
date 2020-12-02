let newEvent = {
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    remindTime: "",
    description: "",
    type: ""
}

var myEvents = [];

document.getElementById("createNewEventModalButton").addEventListener("click", storeEvent);

function storeEvent () {
    newEvent.title = document.getElementById("eventTitle").value;
    newEvent.startDate = document.getElementById("date").value;
    newEvent.endDate = document.getElementById("endDateCalendar").value;
    newEvent.remindTime = document.getElementById("time").value;
    newEvent.description = document.getElementById("description").value;
    newEvent.type = document.getElementById("eventType").value;

    myEvents.push(newEvent);

    
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

function showEventsInCalendar () {
    JSON.parse(myeventinformation);
    alert(myeventinformation[0].title);
}

function createEventContainer () {
    const element = document.createElement("p");
    let text = document.createTextNode("evento1")
    element.appendChild(text)
    
}