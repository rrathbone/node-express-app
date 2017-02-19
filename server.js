const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const nav = [{
  Link: '/Books',
  Text: 'Book'
  }, {
  Link: '/Authors',
  Text: 'Author'
}];
const bookRouter = require('./routes/bookRoutes')(nav);
const authorRouter = require('./routes/authorRoutes')(nav);
const adminRouter = require('./routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);
app.use('/Admin', adminRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello from render',
    nav: [{
      Link: '/Books',
      Text: 'Books'
    }, {
      Link: '/Authors',
      Text: 'Authors'
    }]
  });
});

app.get('/books', (req, res) => {
  res.send('Hello books');
});

app.listen(port, (err) => {
  console.log(`Listening on port ${port}`);
});
