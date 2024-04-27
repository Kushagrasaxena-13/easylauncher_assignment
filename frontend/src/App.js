import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';

import BookListPage from './components/BookListPage/BookListPage';
import BookCreationPage from './components/AddBookPage/AddBookPage';
import BookEditPage from './components/EditBookModal/EditBookModal';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/books" exact element={<BookListPage />} />
        <Route path="/books/create" element={<BookCreationPage />} />
        <Route path="/books/:id/edit" element={<BookEditPage />} />
      </Routes>
    </>
  );
}

export default App;
