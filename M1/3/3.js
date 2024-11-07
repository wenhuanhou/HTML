function calculate() {
    // Prompt the user for three integers
    const num1 = parseInt(prompt("Enter the first integer:"));
    const num2 = parseInt(prompt("Enter the second integer:"));
    const num3 = parseInt(prompt("Enter the third integer:"));

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        // Calculate sum, product, and average
        const sum = num1 + num2 + num3;
        const product = num1 * num2 * num3;
        const average = sum / 3;

        // Display the results in the HTML document
        document.getElementById("results").innerHTML = `
            Sum: ${sum} <br>
            Product: ${product} <br>
            Average: ${average.toFixed(2)}
        `;
    } else {
        // If input is invalid, show an error message
        document.getElementById("results").innerText = "Please enter valid integers.";
    }
}
