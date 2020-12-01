/* function addNewEvent (title, day) {

} */
const previusButton = document.querySelector(".previus-button");
const nextButton = document.querySelector(".next-button");

const monthArray = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"]

previusButton.addEventListener("click", displayMonths);
nextButton.addEventListener("click", displayMonths);
var actualMonth = document.querySelector(".month").innerHTML;
var actualYear = document.querySelector(".year").innerHTML;
console.log(actualYear);
console.log(actualMonth);
function displayMonths () {
    for (let index = 0; index < monthArray.length; index++) {
        if (monthArray[index]===actualMonth) {
            document.querySelector(".month").innerHTML = monthArray[index+1];
            actualMonth = monthArray[index+1];
            console.log(actualMonth);
            break;
        } else if (actualMonth === monthArray[11]) {
            document.querySelector(".month").innerHTML = monthArray[0];
            actualMonth = monthArray[0];
            actualYear = parseInt(actualYear) + 1;
            document.querySelector(".year").innerHTML = actualYear;
            break;
        }
}
}