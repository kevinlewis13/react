'use strict';

var React = require('react');
var Book = require('./book.jsx');

module.exports = React.createClass({
  renderBooks: function() {
    return this.props.data.map(function(book) {
      return <Book data={book} key={book._id} />;
    });
  },
  render: function() {
    return (
      <ul>
        {this.renderBooks()}
      </ul>
    )
  }
});
