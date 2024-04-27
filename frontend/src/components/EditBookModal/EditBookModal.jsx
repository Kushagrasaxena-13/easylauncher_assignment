// EditBookModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './EditBookModal.css'; // Import the CSS file

const EditBookModal = ({ bookId, onClose, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch book details when the component mounts
    fetchBookDetails();
  }, [bookId]); // Fetch book details whenever the bookId prop changes

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/books/${bookId}`);
      console.log(response)
      const bookData = response.data.data;
      // Update state with book details
      setTitle(bookData.title);
      setAuthor(bookData.author);
      setISBN(bookData.ISBN);
      setQuantity(bookData.quantity);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send PUT request to update book details
      await axios.put(`http://localhost:8000/api/books/${bookId}`, {
        title,
        author,
        ISBN,
        quantity
      });
      // Call the onUpdate callback passed from the parent component
      onUpdate();
      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>ISBN:</label>
            <input type="text" value={ISBN} onChange={(e) => setISBN(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div>
          <div className="button-group">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBookModal;
