'use strict';

document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
    const resultsContainer = document.getElementById('results');

    // Clear old results
    resultsContainer.innerHTML = '';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const results = await response.json();


        results.forEach((tvShow) => {
            const { show } = tvShow;


            const article = document.createElement('article');


            const nameElement = document.createElement('h2');
            nameElement.textContent = show.name;
            article.appendChild(nameElement);


            if (show.url) {
                const linkElement = document.createElement('a');
                linkElement.href = show.url;
                linkElement.target = '_blank';
                linkElement.textContent = 'More details';
                article.appendChild(linkElement);
            }


            if (show.image?.medium) {
                const imgElement = document.createElement('img');
                imgElement.src = show.image.medium;
                imgElement.alt = show.name;
                article.appendChild(imgElement);
            }


            if (show.summary) {
                const summaryElement = document.createElement('div');
                summaryElement.innerHTML = show.summary; // Safe as API returns HTML summary
                article.appendChild(summaryElement);
            }


            resultsContainer.appendChild(article);
        });
    } catch (error) {
        console.error('Error fetching TV series data:', error);
        resultsContainer.textContent = `Error: ${error.message}`;
    }
});
