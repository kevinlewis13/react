'use strict';

var React = require('react');


module.exports = React.createClass({
  saveValue: function(event) {

  },
  saveAuthor: function(event) {

  },
  saveTitle: function(event) {

  },
  handleSubmit: function(event) {
    event.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var title = React.findDOMNode(this.refs.title).value.trim();
    this.props.add({title: title, author: author})
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input required type="text" placeholder="title" ref="title" />
        <input required type="text" placeholder="author" ref="author" />
        <input type="submit" value="Add Book" />
      </form>
    )
  }
});
