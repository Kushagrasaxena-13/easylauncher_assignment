// LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.API_URL}/api/users/login`, { email, password });
      console.log(response.data);
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
