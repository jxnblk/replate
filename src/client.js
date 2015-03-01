
var React = require('react');
var Root = React.createFactory(require('./root.jsx'));

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var routes = require('./routes.jsx');

Router.run(routes, function(Handler) {
  React.render(Handler(window.INITIAL_PROPS), document);
});

