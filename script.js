let date = new Date();
// console.log(date)

let month = date.getMonth() + 1;
// console.log(month);

const mo = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let month_text = document.getElementById("month")
month_text.innerHTML = mo[month - 1];

let day = date.getDate()

const  weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
let day_text = document.getElementById('day');
day_text.innerHTML = weekday[day]


document.getElementById("date").innerHTML = date.getDate()
document.getElementById("year").innerHTML = date.getFullYear()



