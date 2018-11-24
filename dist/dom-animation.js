(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["domAnimation"] = factory();
	else
		root["domAnimation"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consts__ = __webpack_require__(1);


function getAvailableEvents(EVENT_NAME_MAP) {
  var tmpEl = document.createElement('div');
  var style = tmpEl.style;

  var events = [];
  for (var baseEventType in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventType];
    for (var styleName in baseEvents) {
      if (styleName in style) {
        events.push(baseEvents[styleName]);
        break;
      }
    }
  }
  return events;
}

var startEvents = void 0;
var endEvents = void 0;
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!('AnimationEvent' in window)) {
    delete __WEBPACK_IMPORTED_MODULE_0__consts__["b" /* START_EVENT_NAME_MAP */].animationstart.animation;
    delete __WEBPACK_IMPORTED_MODULE_0__consts__["c" /* END_EVENT_NAME_MAP */].animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete __WEBPACK_IMPORTED_MODULE_0__consts__["b" /* START_EVENT_NAME_MAP */].transitionstart.transition;
    delete __WEBPACK_IMPORTED_MODULE_0__consts__["c" /* END_EVENT_NAME_MAP */].transitionend.transition;
  }

  startEvents = getAvailableEvents(__WEBPACK_IMPORTED_MODULE_0__consts__["b" /* START_EVENT_NAME_MAP */]);
  endEvents = getAvailableEvents(__WEBPACK_IMPORTED_MODULE_0__consts__["c" /* END_EVENT_NAME_MAP */]);
}

var transitionEvents = {
  // Start events
  startEvents: startEvents,
  // End events
  endEvents: endEvents,

  addStartEventListener: function addStartEventListener(el, eventListener) {
    if (startEvents.length === 0) {
      setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEventName) {
      el.addEventListener(startEventName, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(el, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEventName) {
      el.removeEventListener(startEventName, eventListener);
    });
  },
  addEndEventListener: function addEndEventListener(el, eventListener) {
    if (endEvents.length === 0) {
      setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEventName) {
      el.addEventListener(endEventName, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(el, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEventName) {
      el.removeEventListener(endEventName, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (transitionEvents);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return START_EVENT_NAME_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return END_EVENT_NAME_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return capitalPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prefixes; });
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var capitalPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isCssAnimationSupported__ = __webpack_require__(4);



function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__consts__["a" /* prefixes */].length; i++) {
    ret = style.getPropertyValue(__WEBPACK_IMPORTED_MODULE_0__consts__["a" /* prefixes */][i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (__WEBPACK_IMPORTED_MODULE_1__isCssAnimationSupported__["a" /* default */]) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (fixBrowserByTimeout);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Event__["a" /* default */].endEvents.length !== 0);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domAnimation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domFuc__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isCssAnimationSupported__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setTransition", function() { return __WEBPACK_IMPORTED_MODULE_1__domFuc__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return __WEBPACK_IMPORTED_MODULE_1__domFuc__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isCssAnimationSupported", function() { return __WEBPACK_IMPORTED_MODULE_2__isCssAnimationSupported__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEvents", function() { return __WEBPACK_IMPORTED_MODULE_3__Event__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "domAnimation", function() { return __WEBPACK_IMPORTED_MODULE_0__domAnimation__["a"]; });







/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__domAnimation__["a" /* default */]);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_component_classes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_component_classes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixBrowserByTimeout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clearBrowserBugTimeout__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };






var domAnimation = function domAnimation(el, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';

  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var elClasses = __WEBPACK_IMPORTED_MODULE_0_component_classes___default()(el);

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__fixBrowserByTimeout__["a" /* default */])(el);
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

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__clearBrowserBugTimeout__["a" /* default */])(el);

    elClasses.remove(className);
    elClasses.remove(activeClassName);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(el, el.rcEndListener);
    el.rcEndListener = null;
    if (end) {
      end();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(el, el.rcEndListener);

  return {
    stop: function stop() {
      if (el.rcEndListener) {
        el.rcEndListener();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (domAnimation);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixBrowserByTimeout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clearBrowserBugTimeout__ = __webpack_require__(2);





var setStyle = function setStyle(node, style, callback) {
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

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__clearBrowserBugTimeout__["a" /* default */])(node);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    if (callback) {
      callback();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__fixBrowserByTimeout__["a" /* default */])(node);
  }, 0);
};

var setTransition = function setTransition(node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  __WEBPACK_IMPORTED_MODULE_0__consts__["d" /* capitalPrefixes */].forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(5);
} catch (err) {
  var index = __webpack_require__(5);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
});
//# sourceMappingURL=dom-animation.js.map