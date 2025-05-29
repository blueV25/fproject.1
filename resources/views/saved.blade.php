<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Saved Books</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:700,500&display=swap" rel="stylesheet">
</head>
<body>

    <div class="header-bar">
        Booksy
        <div class="search-bar-container">
            <a href="/" class="home-link">HOME</a>
            |
            <a href="/search" class="saved-link">SEARCH  BOOKS</a>
        </div>
    </div>

    <h1>YOUR SAVED BOOKS</h1>

    @if(isset($books) && count($books) > 0)
        <div class="books-grid">
        @foreach($books as $book)
            <div class="book">
                <img src="{{ $book['cover_url'] ?? '' }}" alt="Cover" />
                <h3 class="title">{{ $book['title'] }}</h3>
                <p class="author">Author: {{ $book['author'] ?? 'Unknown' }}</p>
            </div>
        @endforeach
        </div>
    @else
        <p style="margin-left:60px;">No books found.</p>
    @endif

    <script src="{{ asset('js/book.js') }}"></script>

</body>
</html>
