'use strict';

document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const query = document.getElementById('query').value.trim(); // Get user input
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        console.log(`Fetching data for query: ${query}`); // Log the query being searched
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const results = await response.json(); // Parse the response as JSON
        console.log('Search results:', results); // Log the results to the console

        // Display the raw JSON in the <pre> element for debugging purposes
        document.getElementById('results').textContent = JSON.stringify(results, null, 2);

    } catch (error) {
        console.error('Error fetching TV series data:', error); // Log any errors
        document.getElementById('results').textContent = `Error: ${error.message}`;
    }
});
