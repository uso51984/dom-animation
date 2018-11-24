'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _componentClasses = require('component-classes');

var _componentClasses2 = _interopRequireDefault(_componentClasses);

var _Event = require('./Event');

var _Event2 = _interopRequireDefault(_Event);

var _fixBrowserByTimeout = require('./fixBrowserByTimeout');

var _fixBrowserByTimeout2 = _interopRequireDefault(_fixBrowserByTimeout);

var _clearBrowserBugTimeout = require('./clearBrowserBugTimeout');

var _clearBrowserBugTimeout2 = _interopRequireDefault(_clearBrowserBugTimeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var domAnimation = function domAnimation(el, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';

  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var elClasses = (0, _componentClasses2['default'])(el);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (el.rcEndListener) {
    el.rcEndListener();
  }

  if (start) {
    start();
  }

  elClasses.add(className);

  el.rcAnimTimeout = setTimeout(function () {
    el.rcAnimTimeout = null;
    elClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    (0, _fixBrowserByTimeout2['default'])(el);
    // 30ms for firefox
  }, 30);

  el.rcEndListener = function (e) {
    if (e && e.target !== el) {
      return;
    }
    if (el.rcAnimTimeout) {
      clearTimeout(el.rcAnimTimeout);
      el.rcAnimTimeout = null;
    }

    (0, _clearBrowserBugTimeout2['default'])(el);

    elClasses.remove(className);
    elClasses.remove(activeClassName);

    _Event2['default'].removeEndEventListener(el, el.rcEndListener);
    el.rcEndListener = null;
    if (end) {
      end();
    }
  };

  _Event2['default'].addEndEventListener(el, el.rcEndListener);

  return {
    stop: function stop() {
      if (el.rcEndListener) {
        el.rcEndListener();
      }
    }
  };
};

exports['default'] = domAnimation;
module.exports = exports['default'];