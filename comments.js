// Create web server
const express = require('express');
const app = express();

// Import the comments.js module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});