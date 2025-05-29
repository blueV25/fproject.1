<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
</head>

<body>
    <div class="header-bar">
        Booksy
        <div class="search-bar-container">
            <form class="search-bar" onsubmit="searchBooks(); return false;">
                <input type="text" id="query" placeholder="Enter keywords..." />

                <button type="submit" class="search-btn">SEARCH</button>
            </form>
            <a href="/" class="home-link">HOME</a>
            |
            <a href="/saved" class="saved-link">SAVED BOOKS</a>
        </div>
    </div>
    <div id="results"></div>

    <!-- ################################################################3-->
    <div id="bookModal">
        <div class="modal-content">
            <button id="closeModal">✖</button>
            <img id="modalCover" src="" alt="Cover" />
            <div>
                <h2 id="modalTitle"></h2>
                <h4 id="modalAuthor"></h4>
                <p id="modalDescription"></p>
                <button id="saveBookBtn">SAVE BOOK</button>
            </div>
        </div>
    </div>
    <script src="/js/book.js"></script>
</body>
</html>
