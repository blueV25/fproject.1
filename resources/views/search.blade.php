<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>

<body>


<h2>Search Books</h2>
<input type="text" id="query" placeholder="Search for books...">
<button onclick="searchBooks()">Search</button>

<div id="results"></div>


<!-- Modal -->
<div id="bookModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
    background:rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index:1000;">
    <div style="background:#fff; padding:20px; max-width:800px; width:90%; position:relative; border-radius:8px;">
        <button id="closeModal" style="position:absolute; top:10px; right:10px; font-size:18px;">✖</button>
        <h2 id="modalTitle"></h2>
        <h4 id="modalAuthor"></h4>
        <img id="modalCover" src="" alt="Cover" style="max-width:150px; margin-bottom:15px;" />
        <p id="modalDescription"></p>
        <button id="saveBookBtn">Save Book</button>

    </div>
</div>



<script src="/js/book.js"></script>
</body>
</html>
