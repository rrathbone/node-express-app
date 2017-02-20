const express = require('express');
const authorRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const router = function(nav) {
  authorRouter.use((req, res, next) => {
    if(!req.user) {
      res.redirect('/');
    }

    next();
  });

  authorRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017/libraryApp';

      mongodb.connect(url, (err, db) => {
        const collection = db.collection('authors');

        collection.find({}).toArray((err, results) => {
          res.render('authorListView', {
            title: 'Authors',
            nav: nav,
            authors: results
          })
        });
      });
    });

  authorRouter.route('/:id')
    .get((req, res) => {
      const id = new objectId(req.params.id);
      const url = 'mongodb://localhost:27017/libraryApp';

      mongodb.connect(url, (err, db) => {
        const collection = db.collection('authors');

        collection.findOne({_id: id}, ((err, results) => {
          res.render('authorView', {
            title: 'Author',
            nav: nav,
            author: results
          })
        }));
      });
    });

  return authorRouter;
}

module.exports = router;
