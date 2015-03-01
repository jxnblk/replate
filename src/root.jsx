
var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;
var Link = Router.Link;

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

var Home = require('./home.jsx');
var Docs = require('./docs.jsx');
var NotFoundPage = require('./404.jsx');

module.exports = React.createClass({
  render: function() {
    var script = this.props.baseUrl + this.props.script;
    return (
      <Html {...this.props} script={script}>
        <div className="flex flex-column container"
          style={{ minHeight: '100vh' }}>
          <Header {...this.props} />
          <div className="flex-auto px2">
            <Locations path={this.props.path}>
              <Location path="/" handler={Home} />
              <Location path="/docs" handler={Docs} />
              <NotFound handler={NotFoundPage} />
            </Locations>
          </div>
          <Footer {...this.props} />
        </div>
      </Html>
    )
  }
});
