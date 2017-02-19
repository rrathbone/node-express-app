const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/books', (req, res) => {
  res.send('Hello books');
});

app.listen(port, (err) => {
  console.log(`Listening on port ${port}`);
});
