function getNumbers() {
    // Create an empty array to store the numbers
    let numbers = [];

    // Prompt the user for five numbers
    for (let i = 0; i < 5; i++) {
        let number = parseFloat(prompt(`Enter number ${i + 1}:`));
        numbers.push(number); // Add the number to the array
    }

    // Print the numbers in reverse order using a for-loop
    console.log("The numbers in reverse order are:");
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]); // Print each number in reverse order
    }
}

