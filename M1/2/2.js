window.onload = function () {
    const name = prompt("Please enter your name:");


    if (name) {
        document.getElementById("greeting").innerText = "Hello, " + name + "!";
    } else {
        document.getElementById("greeting").innerText = "Hello, guest!";
    }

}
