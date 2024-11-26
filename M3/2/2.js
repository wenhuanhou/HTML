
const targetElement = document.getElementById("target");

const items = ["First item", "Second item", "Third item"];


items.forEach((itemText) => {

    const listItem = document.createElement("li");


    listItem.textContent = itemText;


    listItem.classList.add("my-item");


    targetElement.appendChild(listItem);
});
