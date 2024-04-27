// AddBookModal.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './AddBookPage.css'; // Import the CSS file

const AddBookModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to add book
      await axios.post(`http://localhost:8000/api/books`, {
        title,
        author,
        ISBN,
        quantity
      });
      // Reset form fields after successful submission
      setTitle('');
      setAuthor('');
      setISBN('');
      setQuantity('');
      // Call the onAdd callback passed from the parent component
      onAdd();
      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Book</h2>
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
            <button type="submit">Add Book</button>
            <button type="button" onClick={onClose}>Cancel</button> {/* Add onClick event handler for cancel button */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBookModal;
