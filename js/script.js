// function calculateAkanName() {
//     alert("Done!");

// }
// function generateAkanName() {
//     alert("Form Submitted");
// }
// function generateAkanName(e) {
//     document.getElementById("reveal-result").innerHTML = "Your Akan Name is ...!!";
//     console.log(e)
// }

// window.addEventListener('load', function() {


// })

// let form = document.querySelector("form");

// console.log(form);

// form.addEventListener('submit', function(e) {
//     document.getElementById("reveal-result").innerHTML = "Your Akan Name is ...!!";
//     e.preventDefault()
// // })
// function generateAkanName() {
//     document.getElementById("reveal-result").innerHTML = "Your Akan Name is ...";
// }
let akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    //alert("complete");
    let result = document.getElementById("reveal-result").innerHTML = "Your Akan Name is ..."

    gender = document.getElementById("gender").value
        //to get the value of gender selected by the user
    dateOfBirth = document.getElementById("date").value
        //to get the value of date input by the user

    // dateOfBirth = dateOfBirth.split("")
    // console.log(dateOfBirth);

    dateOfBirth = new Date(dateOfBirth);
    //dateOfBirth = parseInt(dateOfBirth) - this will only convert the first part of the string and not the entire date
    //console.log(dateOfBirth)
    //to convert value of date(which is a string) to numbers
    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();

    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth

    dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    //console.log(dayOfTheWeek); this brings day of the week in numbers which can also have decimals.

    dayOfTheWeek = parseInt(dayOfTheWeek);

    let bornDay;

    if (dayOfTheWeek == 1) {
        bornDay = "Sunday";
        console.log(bornDay);
    } else if (dayOfTheWeek == 2) {
        bornDay = "Monday";
        console.log(bornDay);
    } else if (dayOfTheWeek == 3) {
        bornDay = "Tuesday";
        console.log(bornDay);
    } else if (dayOfTheWeek == 4) {
        bornDay = "Wednesday";
        console.log(bornDay);
    } else if (dayOfTheWeek == 5) {
        bornDay = "Thursday";
        console.log(bornDay);
    } else if (dayOfTheWeek == 6) {
        bornDay = "Friday";
        console.log(bornDay);
    } else if (dayOfTheWeek == 7) {
        bornDay = "Saturday"
    }


});