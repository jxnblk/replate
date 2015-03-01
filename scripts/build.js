
var _ = require('lodash');
var path = require('path');
var staticReact = require('static-react');
var Root = require('../src/root.jsx');
var props = require('../package.json');

props.routes = [
  { path: '/', title: 'Home' },
  { path: '/docs', title: 'Docs' },
];

if (process.env.NODE_ENV === 'production') {
  console.log('production build');
  props.baseUrl = '/replate';
} else {
  console.log('development build');
  props.baseUrl = '';
}

props.title = _.capitalize(props.name);
props.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.2/bassdock.min.css';
props.script = '/js/app.js'

staticReact({
  dir: path.join(__dirname, '..'),
  Root: Root,
  props: props
});

