//todo - router is a mini express.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();
router.post('/login', userController.login);

router.use(userController.authorize);


module.exports = router;