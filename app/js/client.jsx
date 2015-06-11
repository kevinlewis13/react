'use strict';

var React = require('react');
var BookList = require('./components/book_list.jsx');
var BookForm = require('./components/book_form.jsx');
var request = require('superagent');

var App = React.createClass({
  getInitialState: function() {
    return {books: [], title: "Books: "};
  },
  componentDidMount: function() {
    console.log('mounted');
    this.loadBooks();
  },
  loadBooks: function() {
    request
      .get('/api/books')
      .end(function(err, res) {
        if(err) return console.log(err);

        this.setState({books: res.body});
      }.bind(this));
  },
  saveBook: function(book) {
    console.log('HELLO');
    console.log(book);
    request
      .post('/api/books')
      .send(book)
      .end(function(err, res) {
        if (err) {
          return console.log(err);
        }
        console.log(res.body);
        this.loadBooks();
      }.bind(this));
  },
  render: function() {
    return (
      <main>
        <h1>{this.state.title}</h1>
        <BookForm add={this.saveBook} />
        <BookList data={this.state.books} />
      </main>
    )
  }
});

React.render(<App />, document.body);
