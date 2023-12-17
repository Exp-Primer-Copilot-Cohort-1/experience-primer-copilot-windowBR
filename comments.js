// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/commentsController');

// Import comments validation
const commentsValidation = require('../validations/commentsValidation');

// Import middleware
const auth = require('../middleware/auth');

// Import multer
const multer = require('../middleware/multer-config');

// Create comments routes
router.post('/add', auth, multer, commentsValidation.comment, commentsController.addComment);
router.get('/get', auth, commentsController.getAllComments);
router.get('/get/:id', auth, commentsController.getOneComment);
router.put('/update/:id', auth, multer, commentsValidation.comment, commentsController.updateComment);
router.delete('/delete/:id', auth, commentsController.deleteComment);

// Export comments routes
module.exports = router;