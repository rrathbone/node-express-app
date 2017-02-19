const express = require('express');
const adminRouter = express.Router();
const mongodb = require('mongodb').MongoClient;

const books = [{
              title: 'War and Peace',
              genre: 'Historical Fiction',
              author: 'Lev Nikolayevich Tolstoy',
              read: false
          },
          {
              title: 'Les Misérables',
              genre: 'Historical Fiction',
              author: 'Victor Hugo',
              read: false
          },
          {
              title: 'The Time Machine',
              genre: 'Science Fiction',
              author: 'H. G. Wells',
              read: false
          },
          {
              title: 'A Journey into the Center of the Earth',
              genre: 'Science Fiction',
              author: 'Jules Verne',
              read: false
          },
          {
              title: 'The Dark World',
              genre: 'Fantasy',
              author: 'Henry Kuttner',
              read: false
          },
          {
              title: 'The Wind in the Willows',
              genre: 'Fantasy',
              author: 'Kenneth Grahame',
              read: false
          },
          {
              title: 'Life On The Mississippi',
              genre: 'History',
              author: 'Mark Twain',
              read: false
          },
          {
              title: 'Childhood',
              genre: 'Biography',
              author: 'Lev Nikolayevich Tolstoy',
              read: false
          }];

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

const router = function(nav) {
  adminRouter.route('/addBooks')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017/libraryApp';

      mongodb.connect(url, (err, db) => {
        let collection = db.collection('books');
        collection.insertMany(books, (err, results) => {
          res.send(results);
          db.close();
        });
      });
    });

    adminRouter.route('/addAuthors')
      .get((req, res) => {
        const url = 'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, (err, db) => {
          let collection = db.collection('authors');
          collection.insertMany(authors, (err, results) => {
            res.send(results);
            db.close();
          });
        });
      });

  return adminRouter;
}

module.exports = router;
