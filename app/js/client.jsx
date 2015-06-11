'use strict';

var React = require('react');
var BookList = require('./components/books_list.jsx');
var request = require('superagent');

var App = React.createClass({
  getInitialState: function() {
    return {books: [], title: "Books: "};
  },
  componentDidMount: function() {
    request
      .get('/api/books')
      .end(function(err, res) {
        if(err) return console.log(err);

        this.setState({books: res.body});
      }.bind(this));
  },
  render: function() {
    return (
      <main>
        <h1>{this.state.title}</h1>
        <BookList data={this.state.books} />
      </main>
    )
  }
});

React.render(<App />, document.body);
