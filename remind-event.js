
setInterval (isReminderEvent, 10000)

function isReminderEvent() {
    console.log("check remind")
    let allMyEvents = [];
    allMyEvents = getStoreInformation();
    document.getElementById("warning-box").innerHTML = `<h2>Expired events</h2>`;
    for (let index = 0; index < allMyEvents.length; index++) {
        if (allMyEvents[index].remind) {
            let now = Date.now();
            console.log("end date : " + allMyEvents[index].endDate)
            let endDate = new Date (allMyEvents[index].endDate)
            let day = endDate.getDate();
            let month = endDate.getMonth();
            month = monthArray[month];
            console.log(month);
            let year = endDate.getFullYear();
            endDate = "" + month + " " + day + ", " + year;
            let endDateMil = Date.parse(endDate);

            if (endDateMil - now < 0) {
                document.querySelector("p[id='"+ index.toString() + "']").style.backgroundColor = "red";
                document.getElementById("warning-box").style.display = "flex";
                let newExpiredEventcont = document.createElement("article");
                let expiredEventTitlecont = document.createElement("h3");
                let expiredEventStartDatecont = document.createElement("p");
                let expiredEventEndDatecont = document.createElement("p");
                expiredEventTitlecont.innerHTML = allMyEvents[index].title;
                expiredEventStartDatecont.innerHTML = "Start date: " + allMyEvents[index].startDate;
                expiredEventEndDatecont.innerHTML = "End date: " + allMyEvents[index].endDate;
                newExpiredEventcont.appendChild(expiredEventTitlecont);
                newExpiredEventcont.appendChild(expiredEventStartDatecont);
                newExpiredEventcont.appendChild(expiredEventEndDatecont);

                if (allMyEvents[index].description != "") {
                    let expiredEventDescriptioncont = document.createElement("p");
                    expiredEventDescriptioncont.innerHTML = "Description: " + allMyEvents[index].description;
                    newExpiredEventcont.appendChild(expiredEventDescriptioncont);
                }
                if (allMyEvents[index].description != "") {
                    let expiredEventTypecont = document.createElement("p");
                    expiredEventTypecont.innerHTML = "Type: " + allMyEvents[index].type;
                    newExpiredEventcont.appendChild(expiredEventDescriptioncont);
                }
                document.getElementById("warning-box").appendChild(newExpiredEventcont)
                console.log(endDateMil)
                console.log(now)
                console.log(endDateMil - now);
                let passTime = new Date(now-endDateMil);
            }
        }
        
    }
}