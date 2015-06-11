'use strict';

var React = require('react');

//book component
module.exports = React.createClass({
  render: function() {
    return <li>{this.props.data.title} by {this.props.data.author}</li>;
  }
});
