const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/books', (req, res) => {
  res.send('Hello books');
});

app.listen(port, (err) => {
  console.log(`Listening on port ${port}`);
});
