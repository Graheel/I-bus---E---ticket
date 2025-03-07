const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route to handle contact form submission
router.post('/submit', contactController.submitContactForm);

// Route to get all contact messages (optional)
router.get('/messages', contactController.getAllContactMessages);

module.exports = router;
