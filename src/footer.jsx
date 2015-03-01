
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
      <footer className="px2">
        <div className="flex flex-baseline flex-wrap py2 border-top">
          <h1 className="h5 mt0 mb0 mr1">{this.props.title}</h1>
          <p className="h5 m0">v{this.props.version}</p>
          <div>
            {this.props.routes.map(this.renderLink)}
          </div>
          <div className="flex-auto" />
          <p className="h5 bold m0">
            Made by
            <a href="//jxnblk.com">Jxnblk</a>
          </p>
        </div>
      </footer>
    )
  }

});

