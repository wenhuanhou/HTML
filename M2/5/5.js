function getNumbersAndCheck() {

    let numbers = [];


    while (true) {
        let input = parseFloat(prompt("Enter a number (or a number you've already entered to stop):"));


        if (numbers.includes(input)) {
            console.log(`The number ${input} has already been given. Stopping...`);
            break;
        }


        numbers.push(input);
    }


    numbers.sort(function(a, b) {
        return a - b; // Sort in ascending order
    });


    console.log("The given numbers in ascending order:");
    console.log(numbers);
}
