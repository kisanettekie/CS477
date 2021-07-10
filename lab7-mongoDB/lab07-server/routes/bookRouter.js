 const express = require('express');
 //  const bookController = require('../controllers/bookController');
 const bookContr = require('../controllers/bookController')
 const router = express.Router();

 const userController = require('../controllers/userController');

 router.get('/books', bookContr.getBookInfo); //this is middleware not fn call


 router.get('/books/:booId', bookContr.getBookById); //:bookd - indicates specific id for a book
 // we can retrive :booId using query string or req.params.booId
 //todo - req.params + whatever after : ==> req.params.booId
 //todo check on bookController

 router.post('/', userController.authorizeAdmin, bookContr.save); //userController.authorizeAdmin - this is bc it goes back to check if it's admin or not
 router.put('/books/:booId', userController.authorizeAdmin, bookContr.update); //put is used for update or replace

 router.delete('/books/booId', userController.authorizeAdmin, bookContr.deleteById);

 module.exports = router;