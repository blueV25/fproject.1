# Booksy - Book Search & Save Web App

Booksy is a Laravel-based web application that allows users to search for books using the OpenLibrary API, view book details in a modal, and save their favorite books to a local MySQL database. The app demonstrates modern web development practices, including API integration, AJAX/fetch, PHP scripting, and database interaction.

---

## Features

- **Book Search:**  
  Search for books using keywords via the OpenLibrary public API.

- **AJAX Integration:**  
  Uses JavaScript `fetch()` to retrieve and display search results dynamically without reloading the page.

- **Book Details Modal:**  
  Click on a book to view detailed information in a modal window.

- **Save Books:**  
  Save selected books to your personal collection, stored in a MySQL database.

- **Saved Books Page:**  
  View all books you have saved.

- **Responsive UI:**  
  Clean, user-friendly interface styled with custom CSS.

---

## Technologies Used

- **Backend:** PHP (Laravel Framework)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MySQL
- **API:** [OpenLibrary API](https://openlibrary.org/developers/api)
- **Version Control:** Git & GitHub

---

## Pages

- **Home:** Introduction and navigation.
- **Search:** Search for books, view details, and save favorites.
- **Saved:** View your saved books.

---

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/blueV25/fproject.1.git
    cd fproject.1
    ```

2. **Install dependencies:**
    ```bash
    composer install
    npm install
    ```

3. **Configure environment:**
    - Copy `.env.example` to `.env` and set your database credentials.
    - Generate app key:
      ```bash
      php artisan key:generate
      ```

4. **Run migrations:**
    ```bash
    php artisan migrate
    ```

5. **Start the development server:**
    ```bash
    php artisan serve
    ```

6. **Access the app:**  
   Visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## Project Structure

- `resources/views/` - Blade templates for UI
- `public/js/book.js` - JavaScript for AJAX and modal logic
- `app/Http/Controllers/` - Laravel controllers for routing and data processing
- `app/Models/savedbook.php` - Eloquent model for saved books
- `routes/web.php` - Application routes

---

## Requirements Demonstrated

- ✅ **API Integration:** Uses OpenLibrary API for book data.
- ✅ **AJAX/fetch:** JavaScript fetch for dynamic search.
- ✅ **PHP Scripting:** Laravel controllers and Blade templates.
- ✅ **MySQL Integration:** Save and retrieve books using Eloquent ORM.
- ✅ **UI/UX:** Responsive, user-friendly interface.
- ✅ **Version Control:** Managed with Git & GitHub.

---

## Contributors

- Jhian Mae Calumba
- Jay Mark Vigonte

---

## Repository

[https://github.com/blueV25/fproject.1.git](https://github.com/blueV25/fproject.1.git)

---


