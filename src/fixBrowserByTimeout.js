import { prefixes } from './consts';
import isCssAnimationSupported from './isCssAnimationSupported';

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  const style = window.getComputedStyle(node, null);
  let ret = '';
  for (let i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    const transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    const transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    const animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    const animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    const time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(() => {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time* 1000 + 200);
  }
}

export default fixBrowserByTimeout;