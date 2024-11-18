function getNumbersAndSort() {

    let numbers = [];


    while (true) {
        let input = parseFloat(prompt("Enter a number (enter 0 to stop):"));

        if (input === 0) {
            break;
        }


        numbers.push(input);
    }


    numbers.sort(function(a, b) {
        return b - a; // Sort in descending order
    });


    console.log("Numbers from largest to smallest:");
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
