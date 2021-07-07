const express = require('express');
const router = express.Router();
const bookControl = require('../controllers/bookController');

router.get('/', bookController.getBooks);
router.get('/:bookId', bookController.getBookById);
router.post('/', bookController.save);
router.put('/:bookId', bookControl.updatedBk);
router.delete('/:bookId', bookControl.deletedBk);

module.exports = router;


