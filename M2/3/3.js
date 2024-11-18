function getDogNames() {

    let dogNames = [];


    for (let i = 0; i < 6; i++) {
        let name = prompt(`Enter the name of dog ${i + 1}:`);
        dogNames.push(name);
    }


    dogNames.sort().reverse();

    let ul = "<ul>";
    for (let i = 0; i < dogNames.length; i++) {
        ul += `<li>${dogNames[i]}</li>`;
    }
    ul += "</ul>";


    document.getElementById("result").innerHTML = ul;
}
