function checkLeapYear() {

    const year = parseInt(prompt("Enter a year:"));


    if (!isNaN(year)) {

        let isLeapYear = false;

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            isLeapYear = true;
        }

        if (isLeapYear) {
            document.getElementById("result").innerText = `${year} is a leap year.`;
        } else {
            document.getElementById("result").innerText = `${year} is not a leap year.`;
        }
    } else {
        document.getElementById("result").innerText = "Please enter a valid year.";
    }
}
