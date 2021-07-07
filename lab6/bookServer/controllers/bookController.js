const Book = require('../models/books');

module.exports.updatedBk = (req, res, next) => {
    const bk = req.body;
    const upBook = new Book(req.params.id, bk.title, bk.ISBN, bk.published, bk.author);
    res.status(200).json(upBook);
}

module.exports.deletedBk = (req, res, next) => {
    Book.deleteBook(req.params.id);
    res.status(200).end();
}
exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.bookId));
}

exports.save = (req, res, next) => {
    const book = req.body;
    const savedBook = new Book(null, book.title, book.isbn, book.publishedDate, book.author).save();
    res.status(201).json(savedBook);
}