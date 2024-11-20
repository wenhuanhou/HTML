function calculate() {

    const num1 = parseInt(prompt("Enter the first integer:"));
    const num2 = parseInt(prompt("Enter the second integer:"));
    const num3 = parseInt(prompt("Enter the third integer:"));


    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {

        const sum = num1 + num2 + num3;
        const product = num1 * num2 * num3;
        const average = sum / 3;


        document.getElementById("results").innerHTML = `
            Sum: ${sum} <br>
            Product: ${product} <br>
            Average: ${average.toFixed(2)}
        `;
    } else {

        document.getElementById("results").innerText = "Please enter valid integers.";
    }
}
