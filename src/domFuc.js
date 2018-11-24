import { capitalPrefixes } from './consts';
import Event from './Event';
import fixBrowserByTimeout from './fixBrowserByTimeout';
import clearBrowserBugTimeout from './clearBrowserBugTimeout';

export const setStyle = (node, style, callback) => {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = (e) => {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    if (callback) {
      callback();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(() => {
    for (const s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

export const setTransition = (node, p, value) => {
  let property = p;
  let v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach((prefix) => {
    node.style[`${prefix}Transition${property}`] = v;
  });
};