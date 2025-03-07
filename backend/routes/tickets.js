const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Route to handle ticket booking
router.post('/book', ticketController.bookTicket);

// Route to get all tickets (optional)
router.get('/all', ticketController.getAllTickets);

module.exports = router;
