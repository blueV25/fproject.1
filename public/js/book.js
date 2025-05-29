function searchBooks() {
    const query = document.getElementById('query').value.trim().toLowerCase();
    if (!query) return;

    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {

            const filteredBooks = data.docs.filter(book =>
                book.title && book.title.toLowerCase().includes(query)
            );
            displayResults(filteredBooks.slice(0, 10));
        })
        .catch(err => console.error('Error fetching books:', err));
}


function displayResults(books) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (books.length === 0) {
        resultsDiv.innerHTML = '<p>No books found matching your search.</p>';
        return;
    }

    books.forEach(book => {
        const title = book.title || 'Untitled';
        const author = book.author_name?.[0] || 'Unknown';
        const coverUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : '';
        const workKey = book.key.replace('/works/', '');

        // Create card
        const card = document.createElement('div');
        card.classList.add('search-book-card');
        card.style.cursor = 'pointer';

        card.innerHTML = `
            <img class="cover" src="${coverUrl}" alt="Cover" />
            <div class="info">
                <div class="title">${title}</div>
                <div class="author">Author: ${author}</div>
            </div>
        `;

        card.addEventListener('click', () => {
            openBookModal(workKey);
        });

        resultsDiv.appendChild(card);
    });
}

function openBookModal(workKey) {
    const modal = document.getElementById('bookModal');
    const titleEl = document.getElementById('modalTitle');
    const authorEl = document.getElementById('modalAuthor');
    const coverEl = document.getElementById('modalCover');
    const descEl = document.getElementById('modalDescription');
    const saveBtn = document.getElementById('saveBookBtn');

    titleEl.textContent = 'Loading...';
    authorEl.textContent = '';
    coverEl.src = '';
    descEl.textContent = '';
    modal.style.display = 'flex';

    fetch(`https://openlibrary.org/works/${workKey}.json`)
        .then(response => response.json())
        .then(book => {
            const title = book.title || 'Untitled';
            let author = 'Unknown';
            let cover = '';
            const openlibrary_id = workKey;

            titleEl.textContent = title;

            if (book.covers && book.covers.length > 0) {
                cover = `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`;
                coverEl.src = cover;
            } else {
                coverEl.src = '';
            }


            let description = 'No description available.';
            if (book.description) {
                if (typeof book.description === 'string') {
                    description = book.description;
                } else if (typeof book.description === 'object' && book.description.value) {
                    description = book.description.value;
                }
            }
            descEl.textContent = description;


            if (book.authors && book.authors.length > 0) {
                const authorKey = book.authors[0].author.key;
                fetch(`https://openlibrary.org${authorKey}.json`)
                    .then(resp => resp.json())
                    .then(authorData => {
                        author = authorData.name || 'Unknown';
                        authorEl.textContent = `by ${author}`;


                        saveBtn.onclick = () => {
                            saveBook(title, author, cover, openlibrary_id);
                        };
                    })
                    .catch(() => {
                        authorEl.textContent = 'by Unknown';
                        saveBtn.onclick = () => {
                            saveBook(title, author, cover, openlibrary_id);
                        };
                    });
            } else {
                authorEl.textContent = 'by Unknown';
                saveBtn.onclick = () => {
                    saveBook(title, author, cover, openlibrary_id);
                };
            }
        })
        .catch(() => {
            titleEl.textContent = 'Error loading book details.';
            authorEl.textContent = '';
            coverEl.src = '';
            descEl.textContent = '';
        });
}


function saveBook(title, author, cover, openlibrary_id) {
    fetch('/save-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({
            title,
            author,
            cover_url: cover,
            openlibrary_id
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || 'Book saved!');
    })
    .catch(error => {
        console.error('Save failed:', error);
        alert('Failed to save the book.');
    });
}


document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('bookModal').style.display = 'none';
});


window.addEventListener('click', (event) => {
    const modal = document.getElementById('bookModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
