function getStoreInformation () {
    let myeventinformation = JSON.parse(localStorage.getItem("myEvents"));
    return myeventinformation;
}

function showEventsInCalendar (month, year) {
    console.log("the month is " + month);
    let allMyEvents = [];
    allMyEvents = getStoreInformation();

    for (let index = 0; index < allMyEvents.length; index++) {
        d = new Date (allMyEvents[index].startDate);
        var nMonth = d.getMonth();
        var nDay = d.getDate ();
        console.log(nDay);
        console.log(nMonth);
        if (nMonth === month) {
            monthDaysArray.forEach(element => {
                if (element.innerHTML == nDay) {
                    let p = document.createElement("p");
                    let text = document.createTextNode(allMyEvents[index].title);
                    p.appendChild(text);
                    p.classList.add("calendar-event");
                    p.setAttribute("id", index);
                    element.appendChild(p);
                    console.log("Eventos en un dia" + element.childNodes.length);
                }
            });
        }
    }
    myevents = document.querySelectorAll(".calendar-event");
    myevents.forEach(element => {   
    element.addEventListener("click", function (e) {
        index = e.target.getAttribute("id");
        document.getElementById("eventModal").style.display = "block";
        document.getElementById("eventtitle").innerHTML = allMyEvents[index].title;
        document.getElementById("eventEndDate").innerHTML = allMyEvents[index].endDate;
        document.getElementById("eventDescription").innerHTML = allMyEvents[index].description;

        document.getElementById("DeleteEvent").addEventListener("click", removeEventFromMyMemory(index, allMyEvents));
    })
});
}


/* DELETE EVENT */
function removeEventFromMyMemory (idevent, allMyEvents) {
    console.log("remove" + idevent);
    console.log(allMyEvents)
    /* allMyEvents.splice(idevent);

    localStorage.setItem("myEvents", JSON.stringify(allMyEvents));

    showEventsInCalendar(actualMonthNumber, actualYear);
    document.getElementById("eventModal").style.display = "none"; */
}
