const express = require('express');
const users = require('./routes/users');
const books = require("./routes/book");
require('./connection/connection');

// Express application
const app = express();
app.use(express.json());

// Enable CORS middleware
app.use((req, res, next) => {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Allow certain methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // Allow certain headers
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Routes
app.use("/api/users", users);
app.use("/api/books", books);

app.listen("8000", () => {
    console.log("Server is running on port 8000.")
});
