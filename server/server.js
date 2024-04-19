const express = require('express')
const users = require('./routes/users');

// Express application
const app = express();
app.use(express.json());

// Routes
app.use("/api/users", users)

app.listen("3000", () => {
    console.log("Server is running on port 3000.")
})