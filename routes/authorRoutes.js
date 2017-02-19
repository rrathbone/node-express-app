const express = require('express');

const authorRouter = express.Router();

const router = function(nav) {
const authors = [{
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          },
          {
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          },
          {
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          },
          {
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          },
          {
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          },
          {
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          },
          {
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          },
          {
            name: 'War and Peace',
            description: 'Lev Nikolayevich Tolstoy'
          }];

  authorRouter.route('/')
    .get((req, res) => {
      res.render('authorListView', {
        title: 'Authors',
        nav: nav,
        authors: authors
      });
    });

  authorRouter.route('/:id')
    .get((req, res) => {
      const id = req.params.id;
      res.render('authorView', {
        title: 'Author',
        nav: nav,
        author: authors[id]
      });
      res.send('Hello Single Author');
    });

  return authorRouter;
}

module.exports = router;
