
var _ = require('lodash');
var path = require('path');
var staticReact = require('static-react');
var Root = require('../src/root.jsx');
var props = require('../package.json');

props.routes = [
  { path: '/', title: 'Home' },
  { path: '/docs', title: 'Docs' },
];

props.baseUrl = '//jxnblk.com/replate';

props.title = _.capitalize(props.name);
props.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.2/bassdock.min.css';
props.script = '/js/app.min.js'

staticReact({
  dir: path.join(__dirname, '..'),
  Root: Root,
  props: props
});

