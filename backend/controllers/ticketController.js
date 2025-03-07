const Ticket = require('../models/Ticket');

// Function to handle ticket booking
exports.bookTicket = async (req, res) => {
  try {
    const ticketData = req.body;
    const newTicket = new Ticket(ticketData);
    await newTicket.save();
    res.status(201).json({ message: 'Ticket booked successfully', ticket: newTicket });
  } catch (error) {
    console.error('Error booking ticket:', error);
    res.status(500).json({ message: 'Failed to book ticket', error });
  }
};

// Function to retrieve all tickets (optional, for admin use)
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ message: 'Failed to fetch tickets', error });
  }
};
