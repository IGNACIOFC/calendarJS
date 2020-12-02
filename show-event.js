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
                    createEventContainer(element);
                }
            });
        }
        /* recorre mi array de objetos y mirar la propiedad start day */
        /* si el mes y el año de la propiedad startdate coincide con los pasados a la funcion (los del mes y año actuales mostrados) */
        /* llamo a la funcion createEventContainer, pasandole el dia de startday */
    }
}

function createEventContainer (dia) {
    /* recorro todos los dias del mes y cuando coincida con el dia del evento creo un elemento y se lo añado */
    const p = document.createElement("p");
    let text = document.createTextNode("evento1")
    p.appendChild(text);
    dia.appendChild(p);
    
}
