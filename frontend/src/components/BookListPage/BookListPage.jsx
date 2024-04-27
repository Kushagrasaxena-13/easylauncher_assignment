import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookListPage.css';
import EditBookModal from '../EditBookModal/EditBookModal';
import AddBookModal from '../AddBookPage/AddBookPage';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModelOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/books`);
      setBooks(response.data.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleEdit = (id) => {
    setSelectedBookId(id);
    setEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedBookId(null);
  };

  const handleAddBook = () => {
    setAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
  }

  return (
    <div className="container">
      <h2>Book Listing</h2>
      <button className="add-button" onClick={handleAddBook}>Add Book</button>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.ISBN}</p>
            <p>Quantity: {book.quantity}</p>
            <div className="buttons">
              <button className="edit" onClick={() => handleEdit(book.id)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {editModalOpen && (
        <EditBookModal
          bookId={selectedBookId}
          onClose={handleEditModalClose}
          onUpdate={fetchBooks}
        />
      )}
      {addModelOpen && (
        <AddBookModal
          onClose={handleAddModalClose}
        />
      )}
    </div>
  );
}

export default BookListPage;
