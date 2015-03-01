
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Root = require('./root.jsx');
var Home = require('./home.jsx');
var Docs = require('./docs.jsx');
var NotFoundPage = require('./404.jsx');

module.exports = (
  <Route name="root" path="/" handler={Root}>
    <Route name="docs" handler={Docs}/>
    <DefaultRoute handler={Home}/>
  </Route>
);
