'use strict';

var Book = require('../models/Book');
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  router.get('/books', function(req, res) {
    Book.find({}, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'could not retrieve'});
      }

      res.json(data);
    });
  });

  router.post('/books', function(req, res) {
    var newBook = new Book(req.body);
    newBook.save(function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'could not save'});
      }

      res.json(data);
    });
  });

  router.put('/books/:id', function(req, res) {
    var updatedBook = req.body;
    delete updatedBook._id;

    Book.update({'_id': req.params.id}, updatedBook, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'could not update'});
      }

      res.json({msg: 'updated successfully'});
    });
  });

  router.delete('/books/:id', function(req, res) {
    Book.remove({'_id': req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'could not delete'});
      }

      res.json({msg: 'deleted successfully'});
    });
  });
};
