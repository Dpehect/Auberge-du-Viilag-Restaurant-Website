const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load menu data
const menuPath = path.join(__dirname, 'data', 'menu.json');
let menuData = {};

try {
  const data = fs.readFileSync(menuPath, 'utf8');
  menuData = JSON.parse(data);
} catch (err) {
  console.error('Error reading menu data:', err);
}

// Routes
app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  
  // Simulate mail sending
  setTimeout(() => {
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
