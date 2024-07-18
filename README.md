# Book Store Management Application

## Overview

This Book Store Management Application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to perform CRUD (Create, Read, Update, Delete) operations on books. The application provides a user-friendly interface for managing a bookstore's inventory, including adding new books, viewing book details, updating existing book information, and deleting books from the inventory.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Add New Books**: Easily add new books to the inventory with details like title, author, genre, price, and stock quantity.
- **View Books**: View a list of all books in the inventory along with their details.
- **Update Book Information**: Update details of existing books.
- **Delete Books**: Remove books from the inventory.
- **Search Functionality**: Search for books by title, author, or genre.

## Technologies Used

- **MongoDB**: Database to store book information.
- **Express.js**: Backend framework to handle API requests.
- **React.js**: Frontend library to create the user interface.
- **Node.js**: Runtime environment for server-side code.

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/book-store-management.git
   cd book-store-management
   ```

2. **Install backend dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up configuration**:
   Create a `config.js` file in the `backend` directory with the following content:

   ```javascript
   // config.js
   export const PORT = 5555;
   export const mongoDBUrl = "your_mongodb_connection_string";
   ```

5. **Run the backend server**:

   ```bash
   cd backend
   npm start
   ```

6. **Run the frontend server**:

   ```bash
   cd ../frontend
   npm start
   ```

7. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

- **Add Book**: Click on the "Add Book" button and fill out the form.
- **View Books**: View the list of books on the homepage.
- **Update Book**: Click the "Edit" button next to a book and update its information.
- **Delete Book**: Click the "Delete" button next to a book to remove it from the inventory.
- **Search Books**: Use the search bar to find books by title, author, or genre.

---
