
var React = require('react');

/* react-router-component
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;
var Link = Router.Link;
*/

// react-router
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var routes = require('./routes.jsx');

var Html = require('react-html');
//var Header = require('./header.jsx');
//var Footer = require('./footer.jsx');

var Home = React.createFactory(require('./home.jsx'));
var Docs = React.createFactory(require('./docs.jsx'));
var NotFoundPage = require('./404.jsx');

//var Pages = React.createClass({
//  render: function() {
//    return (
//      <Locations contextual>
//        <Location path="/" handler={Home(this.props)} />
//        <Location path="/docs" handler={Docs(this.props)} />
//        <NotFound handler={NotFoundPage} />
//      </Locations>
//    )
//  }
//});


var Root = React.createClass({

  render: function() {
    var script = this.props.baseUrl + this.props.script;
    var path = this.props.baseUrl + this.props.path;
    return (
      <Html {...this.props} script={script}>
        <div className="flex flex-column container"
          style={{ minHeight: '100vh' }}>
          {/* <Header {...this.props} />
              <Footer {...this.props} />
            */}
          <div className="flex-auto px2">
            <RouteHandler />
          </div>
        </div>
      </Html>
    )
  }

});

module.exports = Root;

/*
 <Locations path={path}>
   <Location path={this.props.baseUrl + '/*'} handler={React.createFactory(Pages)(this.props)} />
 </Locations>
*/
