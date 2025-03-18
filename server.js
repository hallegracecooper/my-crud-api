// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Default route for testing server
app.get('/', (req, res) => {
  res.send('API is working!');
});

// API routes
app.use('/api/items', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));