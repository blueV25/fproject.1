// This function is called when the user wants to search for books
function searchBooks() {
    // Get the search term from the input field with id="query"
    const query = document.getElementById('query').value;

    // Call the OpenLibrary API using fetch and the user's search term
    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Get the HTML element where search results will be shown
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results

            // Show only the first 10 results
            data.docs.slice(0, 10).forEach(book => {
                // Get book details safely (use fallback values when missing)
                const title = book.title;
                const author = book.author_name ? book.author_name[0] : 'Unknown';
                const coverId = book.cover_i;
                const openlibraryId = book.key;

                // Build the cover image URL (or leave blank if no image available)
                const coverUrl = coverId
                    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
                    : '';

                // Create a new <div> to hold this book's info
                const bookDiv = document.createElement('div');
                bookDiv.style.margin = '10px 0';

                // Use innerHTML to add content (book title, author, image, and save button)
                bookDiv.innerHTML = `
                    <img src="${coverUrl}" width="100" alt="Cover" />
                    <h4>${title}</h4>
                    <p>by ${author}</p>
                    <button onclick="saveBook('${escapeQuotes(title)}', '${escapeQuotes(author)}', '${coverUrl}', '${openlibraryId}')">Save</button>
                `;

                // Add the new <div> to the results section on the page
                resultsDiv.appendChild(bookDiv);
            });
        });
}

// This function is used to escape single quotes so the onclick handler won't break
function escapeQuotes(str) {
    return str.replace(/'/g, "\\'");
}

// This function sends the selected book to your Laravel backend to save it in the database
function saveBook(title, author, cover, openlibrary_id) {
    fetch('/save-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

            // Add CSRF token for security (required by Laravel)
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        // Send book data to the backend as JSON
        body: JSON.stringify({
            title: title,
            author: author,
            cover_url: cover,
            openlibrary_id: openlibrary_id
        })
    })
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        // Show success message to the user
        alert(data.message || 'Book saved!');
    })
    .catch(error => {
        console.error('Save failed:', error);
        alert('Failed to save the book.');
    });
}
