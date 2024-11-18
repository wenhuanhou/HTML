function getNumbers() {
    let numbers = [];

    while (true) {
        let input = parseFloat(prompt("Enter a number (or the same number to stop):"));

        // Check if the number has already been entered
        if (numbers.includes(input)) {
            console.log(`The number ${input} has already been given. Stopping...`);
            break;
        }

        // Add the number to the array
        numbers.push(input);
    }

    // Sort the numbers in ascending order
    numbers.sort(function(a, b) {
        return a - b; // Sort in ascending order
    });

    // Print the numbers in ascending order to the console
    console.log("The given numbers in ascending order:");
    console.log(numbers);
}

