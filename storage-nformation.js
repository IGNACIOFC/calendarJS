let newEvent = {
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    remindTime: "",
    description: "",
    type: ""
}

console.log(newEvent)
myEvents = [];

document.getElementById("createNewEventModalButton").addEventListener("click",storeEvent);

function storeEvent () {
    newEvent.title = document.getElementById("eventTitle").value;
    newEvent.startDate = document.getElementById("date").value;
    newEvent.endDate = document.getElementById("endDateCalendar").value;
    newEvent.remindTime = document.getElementById("endDateCalendar").value;
}