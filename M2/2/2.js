function getParticipants() {

    const numParticipants = parseInt(prompt("How many participants?"));


    if (isNaN(numParticipants) || numParticipants <= 0) {
        alert("Please enter a valid number of participants.");
        return;
    }


    let participants = [];

    // Loop to collect names of all participants
    for (let i = 0; i < numParticipants; i++) {
        let name = prompt(`Enter name of participant ${i + 1}:`);
        participants.push(name);
    }


    participants.sort();


    let ol = "<ol>";
    for (let i = 0; i < participants.length; i++) {
        ol += `<li>${participants[i]}</li>`;
    }
    ol += "</ol>";


    document.getElementById("result").innerHTML = ol;
}
