const moment = require('moment');



// Create a moment object for the current date
let currentDate = moment();

// Get the year
let year = currentDate.year();

// Get the month (0-based, so add 1 for 1-based month)
let month = currentDate.month() + 1; // Months are 0-based in Moment.js

console.log(year,month);

let daysOfWeek = moment.weekdaysShort();
daysOfWeek = [...daysOfWeek.slice(1), daysOfWeek[0]]; // Start from Monday

console.log(daysOfWeek);



// Get the first day of the month

function getDaysOfMonth(year, month) {
  // Start with the first day of the month
  let startOfMonth = moment([year, month - 1]);
  // Get the number of days in the month
  let daysInMonth = startOfMonth.daysInMonth();
  
  // Create an array to hold all the days
  let daysArray = [];
  
  // Loop through all the days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    // Add each day to the array
    daysArray.push(i);
  }
  
  return daysArray;
}

// Example usage:
const selectedMonth = 9
let daysOfMonth = getDaysOfMonth(year, selectedMonth);

const daysFromAnotherMonth = 35 - daysOfMonth.length


const selectedMonthText = moment([year, selectedMonth - 1]).format('MMMM')

console.log(selectedMonthText,daysOfMonth);


console.log(daysFromAnotherMonth,'days to fill');

let firstDayOfMonth = moment([year, selectedMonth - 1]).startOf('month');

// Get the day of the week as a string (e.g., 'Sunday', 'Monday')
let firstDayOfWeek = firstDayOfMonth.format('dddd');

// Log the first day of the week
console.log("The first day of the month is:", firstDayOfWeek);

// Get the last day of the month
let lastDayOfMonth = moment([year, selectedMonth - 1]).endOf('month');

// Get the day of the week as a string (e.g., 'Sunday', 'Monday')
let lastDayOfWeek = lastDayOfMonth.format('ddd');

// Log the last day of the week
console.log("The last day of the month is:", lastDayOfWeek);

