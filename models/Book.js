'use strict';

var mongoose = require('mongoose');

var simpleBookSchema = mongoose.Schema({
  ownerId: String,
  author: String,
  title: String
});

module.exports = mongoose.model('Book', simpleBookSchema);
