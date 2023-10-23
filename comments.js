// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Allow access to all origins
app.use(cors());

// Create comments array
const comments = require('./comments.json');

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
  }
});