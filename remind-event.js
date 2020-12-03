
setInterval (isReminderEvent, 10000)

function isReminderEvent() {
    console.log("check remind")
    let allMyEvents = [];
    allMyEvents = getStoreInformation();
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
                document.getElementById(index).style.backgroundColor = "red";
                console.log(endDateMil)
                console.log(now)
                console.log(endDateMil - now);
                let passTime = new Date(now-endDateMil);
                /* console.log(passTime.getMinutes());
                console.log(passTime.getHours());
                console.log(passTime.getD()); */
            }
        }
        
    }
}