var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import classes from 'component-classes';
import Event from './Event';
import fixBrowserByTimeout from './fixBrowserByTimeout';
import clearBrowserBugTimeout from './clearBrowserBugTimeout';

var domAnimation = function domAnimation(el, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';

  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var elClasses = classes(el);

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
    fixBrowserByTimeout(el);
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

    clearBrowserBugTimeout(el);

    elClasses.remove(className);
    elClasses.remove(activeClassName);

    Event.removeEndEventListener(el, el.rcEndListener);
    el.rcEndListener = null;
    if (end) {
      end();
    }
  };

  Event.addEndEventListener(el, el.rcEndListener);

  return {
    stop: function stop() {
      if (el.rcEndListener) {
        el.rcEndListener();
      }
    }
  };
};

export default domAnimation;