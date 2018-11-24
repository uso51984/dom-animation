'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTransition = exports.setStyle = undefined;

var _consts = require('./consts');

var _Event = require('./Event');

var _Event2 = _interopRequireDefault(_Event);

var _fixBrowserByTimeout = require('./fixBrowserByTimeout');

var _fixBrowserByTimeout2 = _interopRequireDefault(_fixBrowserByTimeout);

var _clearBrowserBugTimeout = require('./clearBrowserBugTimeout');

var _clearBrowserBugTimeout2 = _interopRequireDefault(_clearBrowserBugTimeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var setStyle = exports.setStyle = function setStyle(node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    (0, _clearBrowserBugTimeout2['default'])(node);

    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    if (callback) {
      callback();
    }
  };

  _Event2['default'].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    (0, _fixBrowserByTimeout2['default'])(node);
  }, 0);
};

var setTransition = exports.setTransition = function setTransition(node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  _consts.capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};