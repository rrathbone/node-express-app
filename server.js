const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');

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
const authRouter = require('./routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'libary'}));

require('./src/config/passport')(app);

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

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
