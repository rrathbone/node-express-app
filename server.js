const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', 'src/views');

// var handlebars = require('express-handlebars')
// app.engine('hbs', handlebars({extname: '.hbs'}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello from render',
    list: ['a', 'b']
  });
});

app.get('/books', (req, res) => {
  res.send('Hello books');
});

app.listen(port, (err) => {
  console.log(`Listening on port ${port}`);
});
