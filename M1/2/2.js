window.onload = function () {
    const name = prompt("Please enter your name:");

    // Display the greeting in the HTML document
    if (name) {
        document.getElementById("greeting").innerText = "Hello, " + name + "!";
    } else {
        document.getElementById("greeting").innerText = "Hello, guest!";
    }

}
