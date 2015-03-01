
var React = require('react');
var Router = require('react-router-component');
var Link = Router.Link;

module.exports = React.createClass({

  renderLink: function(link) {
    var href = this.props.baseUrl + link.path;
    return (
      <Link href={href}
        key={link.title}
        className="button button-transparent blue">
        {link.title}
      </Link>
    )
  },

  render: function() {
    return (
      <header className="px2">
        <div className="flex flex-center flex-wrap py2 border-bottom">
          <div className="flex-auto">
            <h1 className="m0">{this.props.title}</h1>
            <p className="m0">{this.props.description}</p>
          </div>
          <nav>
            {this.props.routes.map(this.renderLink)}
          </nav>
        </div>
      </header>
    )
  }

});

