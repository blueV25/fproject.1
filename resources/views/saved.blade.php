<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Saved Books</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
</head>
<body>

<h1>Saved Books</h1>

@if(isset($books) && count($books) > 0)
    @foreach($books as $book)
        <div class="book">
            <h3 class="title">{{ $book['title'] }}</h3>
            <p class="author">{{ $book['author'] ?? 'Unknown' }}</p>
            <img src="{{ $book['cover_url'] ?? '' }}" alt="Cover" width="100" />
        </div>
    @endforeach
@else
    <p>No books found.</p>
@endif

<script src="{{ asset('js/search.js') }}"></script>

</body>
</html>
