const Contact = require('../models/Contact');

// Function to handle contact form submissions
exports.submitContactForm = async (req, res) => {
  try {
    const contactData = req.body;
    const newContact = new Contact(contactData);
    await newContact.save();
    res.status(201).json({ message: 'Contact message submitted successfully', contact: newContact });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    res.status(500).json({ message: 'Failed to submit contact message', error });
  }
};

// Function to get all contact messages (optional, for admin use)
exports.getAllContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ message: 'Failed to fetch contact messages', error });
  }
};
