function getNumbers() {

    let numbers = [];


    while (true) {
        let input = parseFloat(prompt("Enter a number (enter 0 to stop):"));


        if (input === 0) {
            break;
        }


        numbers.push(input);
    }


    numbers.sort(function(a, b) {
        return b - a;
    });


    console.log("Numbers from largest to smallest:");
    console.log(numbers);
}
