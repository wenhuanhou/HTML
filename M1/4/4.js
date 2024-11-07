function sortHouse() {
    // Prompt the user for their name
    const name = prompt("Enter your name:");

    // Check if a name was entered
    if (name) {

        const houseNumber = Math.floor(Math.random() * 4) + 1;


        let house;
        switch (houseNumber) {
            case 1:
                house = "Gryffindor";
                break;
            case 2:
                house = "Slytherin";
                break;
            case 3:
                house = "Hufflepuff";
                break;
            case 4:
                house = "Ravenclaw";
                break;
        }


        document.getElementById("result").innerText = `${name}, you are ${house}!`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid name.";
    }
}
