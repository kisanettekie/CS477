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
