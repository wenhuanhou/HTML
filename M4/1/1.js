'use strict';

document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const query = document.getElementById('query').value.trim(); // Get the user input
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);


        const resultsElement = document.getElementById('results');
        resultsElement.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Fetch error:', error);
    }
});
