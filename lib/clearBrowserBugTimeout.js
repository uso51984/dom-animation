"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
};

module.exports = exports['default'];