'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domAnimation = exports.transitionEvents = exports.isCssAnimationSupported = exports.setStyle = exports.setTransition = undefined;

var _domAnimation = require('./domAnimation');

var _domAnimation2 = _interopRequireDefault(_domAnimation);

var _domFuc = require('./domFuc');

var _isCssAnimationSupported = require('./isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _Event = require('./Event');

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.setTransition = _domFuc.setTransition;
exports.setStyle = _domFuc.setStyle;
exports.isCssAnimationSupported = _isCssAnimationSupported2['default'];
exports.transitionEvents = _Event2['default'];
exports.domAnimation = _domAnimation2['default'];
exports['default'] = _domAnimation2['default'];