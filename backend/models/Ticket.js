const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true },
  route: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  bookingTime: { type: Date, default: Date.now },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;