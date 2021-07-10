const Book = require('../models/book'); //require the class

module.exports.getBookInfo = async(res, req, next) => {
    try {
        const books = await Book.getAll();
        res.status(200).json(books); //get the object in json format
    } catch (error) {
        next(error);
    }


}

exports.save = async(req, res, next) => {
    //req.body --> {title: '', author: '',  ...}
    const data = req.body;
    try {
        const myBook = await new Book(null, data.title, data.isbn, data.publishedDate, data.author).save(); //promise
        res.status(201).json(myBook.ops[0]); //ops - is an array -- postman
    } catch (err) {
        next(err);
    }

}

exports.findBookById = async(req, res, next) => {
    try {
        const books = await Book.getBookById(req.params.booId);
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }

}

exports.deleteById = async(req, res, next) => {
    try {
        await Book.deleteById(req.params.booId);
        res.status(200).end();
    } catch (err) {
        next(err);
    }

}

exports.update = async(req, res, next) => {
    try {
        const book = req.body;
        //todo - NB - new Book(req.params.booId, book.title, book.isbn, book.publishedDate, book.author) - refers to 'this' keyword
        //todo - on models -> book -> update() method
        const updatedBook = await new Book(req.params.booId, book.title, book.isbn, book.publishedDate, book.author).update();
        res.status(200).json(updatedBook);
    } catch (err) {
        next(err);
    }

}