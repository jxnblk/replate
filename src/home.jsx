
var React = require('react');
var Router = require('react-router-component');
var Link = Router.Link;

module.exports = React.createClass({
  renderLink: function(link) {
    return (
      <Link href={link.path}
        key={link.title}
        className="button button-transparent blue">
        {link.title}
      </Link>
    )
  },

  render: function() {
    return (
      <main>
        <h1>Home</h1>
        {this.props.routes.map(this.renderLink)}
      </main>
    )
  }
});

