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
        document.getElementById("eventStartDate").innerHTML =  "Start date: " + allMyEvents[index].startDate;
        if (allMyEvents[index].endDate != "") {
            document.getElementById("eventEndDate").innerHTML = "End date: " + allMyEvents[index].endDate;
        } else {
            document.getElementById("eventEndDate").style.display = "none"
        }
        if (allMyEvents[index].description != "") {
            document.getElementById("eventDescription").innerHTML = "Description: " + allMyEvents[index].description;
        } else {
            document.getElementById("eventDescription").style.display = "none"
        }
        document.querySelector(".DeleteEvent").setAttribute("id", index)
        document.getElementById(index).addEventListener("click", removeEventFromMyMemory);
    })
});
}


/* DELETE EVENT */
function removeEventFromMyMemory (e) {
    index = e.target.getAttribute("id");
    e.target.removeAttribute("id");
    console.log("remove" + index);

    let allMyEvents = [];
    allMyEvents = getStoreInformation();
    console.log("Eventos number " + allMyEvents.length);
    allMyEvents.splice(index, 1);
    console.log("Eventos number " + allMyEvents.length);
    localStorage.setItem("myEvents", JSON.stringify(allMyEvents));
    document.getElementById("eventModal").style.display = "none";
    
    showEventsInCalendar(actualMonthNumber - 1, actualYear);
}
