const express = require('express');
const router = express.Router();
const bookControl = require('../controllers/bookController');

router.put('/:bookId', bookControl.updatedBk);
router.delete('/:bookId', bookControl.deletedBk);

module.exports = router;


