/* CALENDAR NAVEGATION */
const previusButton = document.querySelector(".previus-button");
const nextButton = document.querySelector(".next-button");

const monthArray = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"]

previusButton.addEventListener("click", displayMonths);
nextButton.addEventListener("click", displayMonths);
var actualMonth = document.querySelector(".month").innerHTML;
var actualYear = document.querySelector(".year").innerHTML;

let monthDaysArray = document.querySelectorAll(".days-container li");

getWeekDay ();

function displayMonths (e) {
    if(e.target.className.includes("right")){
        switch (actualMonth) {
            case "December":
                document.querySelector(".month").innerHTML = monthArray[0];
                actualMonth = monthArray[0];
                actualYear = parseInt(actualYear) + 1;
                document.querySelector(".year").innerHTML = actualYear;
                getWeekDay ();
                break;
        
            default:
                for (let index = 0; index < monthArray.length; index++) {
                    if (monthArray[index]===actualMonth) {
                        document.querySelector(".month").innerHTML = monthArray[index+1];
                        actualMonth = monthArray[index+1];
                        console.log(actualMonth);
                        getWeekDay ();
                        break;
                    }
                }
        }
    } else if (e.target.className.includes("left")) {
        switch (actualMonth) {
            case "January":
                document.querySelector(".month").innerHTML = monthArray[11];
                actualMonth = monthArray[11];
                actualYear = parseInt(actualYear) - 1;
                document.querySelector(".year").innerHTML = actualYear;
                getWeekDay ();
                break;
        
            default:
                for (let index = 0; index < monthArray.length; index++) {
                    if (monthArray[index]===actualMonth) {
                        document.querySelector(".month").innerHTML = monthArray[index-1];
                        actualMonth = monthArray[index-1];
                        console.log(actualMonth);
                        getWeekDay ();
                        break;
                    }
                }
        }
    }
    
}

function getWeekDay () {
    var actualMonthNumber;
    for (let index = 0; index < monthArray.length; index++) {
        if (monthArray[index]===actualMonth) {
            actualMonthNumber = index + 1;
            break;
        };
    }
    console.log(actualYear);
    console.log(actualMonthNumber);
    var firstDay = new Date (actualYear, actualMonthNumber - 1, 1);
    console.log(firstDay.getDay());
    firstDayNumber = firstDay.getDay();

    var numberOfDays;

    if (actualMonthNumber === 1 || actualMonthNumber === 3 || actualMonthNumber === 5 || actualMonthNumber === 7 || actualMonthNumber === 8 || actualMonthNumber === 10 || actualMonthNumber === 12) {
        numberOfDays = 31;
    } else if (actualMonthNumber === 4 || actualMonthNumber === 6 || actualMonthNumber === 9 || actualMonthNumber === 11) {
        numberOfDays = 30;
    } else if (actualMonthNumber === 2) {
        numberOfDays = 28;
    }
    monthDaysArray.forEach(element => {
        element.innerHTML = "";
    });
    console.log(numberOfDays);
    for (let index = 1; index <= numberOfDays; index++) {
        if (firstDayNumber===0) {
            firstDayNumber = 7;
        }
        monthDaysArray[(firstDayNumber-1)].innerHTML = index;
        firstDayNumber ++;
    }
}

/* DISPLAY NEW EVENT BUTTON */
monthDaysArray.forEach(element => {
    element.addEventListener("mouseover", displayNewEventButton);
    element.addEventListener("mouseout", removeNewEventButton);
});
function displayNewEventButton (e) {

    if (e.target.innerHTML!="") {
        var buttonElement = document.createElement("button");
        var buttonText = document.createTextNode("New");
        buttonElement.appendChild(buttonText);
        var newEventButton = e.target.appendChild(buttonElement);
        newEventButton.classList.add("new-event-day");
        /* e.target.innerHTML += `<button class="new-event-day">New</button>`; */
    }
}
function removeNewEventButton (e) {
    e.target.lastChild.remove();
}