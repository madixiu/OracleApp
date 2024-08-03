// Ensure you include moment.js before using this script
// <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
const moment = require('moment');





// Ensure you include moment.js before using this script
// <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

function getWeeksForMonth(year, month) {
    // Initialize the moment date for the given month and year
    const startOfMonth = moment([year, month - 1]); // month - 1 because moment months are 0-indexed
    const endOfMonth = moment(startOfMonth).endOf('month');
    
    // Find the first Monday on or before the start of the month
    let startOfWeek = moment(startOfMonth).startOf('week').add(1, 'days'); // .startOf('week') gives Sunday, add 1 day for Monday
    
    // If the month starts on a Sunday, adjust startOfWeek to the Monday of the previous week
    if (startOfMonth.day() === 0) {
        startOfWeek.subtract(1, 'weeks');
    }

    const weeks = [];
    let currentDate = startOfWeek;

    while (currentDate.isBefore(endOfMonth) || currentDate.isSame(endOfMonth)) {
        const week = [];
        for (let i = 0; i < 7; i++) {
            week.push(moment(currentDate)); // push as a moment object
            currentDate.add(1, 'days');
        }
        weeks.push(week);
    }

    // Add trailing days from the next month if the last week is incomplete
    if (weeks[weeks.length - 1].length < 7) {
        const lastWeek = weeks[weeks.length - 1];
        while (lastWeek.length < 7) {
            lastWeek.push(moment(currentDate)); // push as a moment object
            currentDate.add(1, 'days');
        }
    }

    return weeks;
}



// Example usage:
const year = 2024;
const month = 7; // September
const weeks = getWeeksForMonth(year, month);
console.log(weeks);
// weeks.forEach(week => {
//     week.forEach(day => {
//         console.log(day.format('YYYY-MM-DD'));
//     });
// });