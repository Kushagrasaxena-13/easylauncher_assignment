const express = require('express');
const Book = require('../model/book');
const { validate_token } = require('../middleware/jwt');
const router = express.Router();

router.post("/",  async (req, res) => {
    try {
        const { title, author, ISBN, quantity } = req.body;
        const book = await Book.create({
            title: title,
            author: author,
            ISBN: ISBN,
            quantity: quantity
        });
        return res.status(201).json({ status: true, message: "Book created successfully", data: book });
    } catch (error) {
        console.error("Error creating book:", error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.findAll();
        return res.status(200).json({ status: true, data: books });
    } catch (error) {
        console.error("Error fetching books:", error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ status: false, message: "Book not found" });
        }
        return res.status(200).json({ status: true, data: book });
    } catch (error) {
        console.error("Error fetching book:", error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const bookId = req.params.id;
        const { title, author, ISBN, quantity } = req.body;

        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ status: false, message: "Book not found" });
        }

        await book.update({
            title: title,
            author: author,
            ISBN: ISBN,
            quantity: quantity
        });

        return res.status(200).json({ status: true, message: "Book updated successfully", data: book });
    } catch (error) {
        console.error("Error updating book:", error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ status: false, message: "Book not found" });
        }
        await book.destroy();
        return res.status(200).json({ status: true, message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book:", error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

module.exports = router;
