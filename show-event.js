function showEventsInCalendar (month, year) {
    for (let index = 0; index < myeventinformation.length; index++) {
        /* recorre mi array de objetos y mirar la propiedad start day */
        myeventinformation[index].startDate.getMonth ()
        /* si el mes y el año de la propiedad startdate coincide con los pasados a la funcion (los del mes y año actuales mostrados) */
        /* llamo a la funcion createEventContainer, pasandole el dia de startday */
    }
    JSON.parse(myeventinformation);
    alert(myeventinformation[0].title);
}

function createEventContainer (dia) {
    /* recorro todos los dias del mes y cuando coincida con el dia del evento creo un elemento y se lo añado */
    const element = document.createElement("p");
    let text = document.createTextNode("evento1")
    element.appendChild(text);
    
}
