<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saved Books</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>

<body>


<h2>Search Books</h2>
<input type="text" id="query" placeholder="Search for books...">
<button onclick="searchBooks()">Search</button>

<div id="results"></div>



<script src="/js/search.js"></script>
</body>
</html>
