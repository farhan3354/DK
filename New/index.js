const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

// Define the Contact schema and model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  subject: { type: String, required: true },
  contact: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Route to handle contact form submissions
app.post('/submit-form', async (req, res) => {
  const { name, email, message, subject, contact } = req.body;

  // Validate request data
  if (!name || !email || !message || !subject || !contact) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create a new contact document
    const newContact = new Contact({ name, email, message, subject, contact });
    // Save the document to MongoDB
    await newContact.save();
    res.status(201).json({ message: 'Contact message saved successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error.message);
    res.status(500).json({ error: error.message });
  }
});


// get api
app.get('/contacts', async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      console.error('Error fetching contact messages:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
