import classes from 'component-classes';
import Event from './Event';
import fixBrowserByTimeout from './fixBrowserByTimeout'
import clearBrowserBugTimeout from './clearBrowserBugTimeout';


const domAnimation = (el, transitionName, endCallback) => {
  const nameIsObj = typeof transitionName === 'object';
  const className = nameIsObj ? transitionName.name : transitionName;
  const activeClassName = nameIsObj ? transitionName.active : `${transitionName}-active`;

  let end = endCallback;
  let start;
  let active;
  const elClasses = classes(el);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (el.rcEndListener) {
    el.rcEndListener()
  }

  if (start) {
    start();
  }

  elClasses.add(className);

  el.rcAnimTimeout = setTimeout(() => {
    el.rcAnimTimeout = null;
    elClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(el);
    // 30ms for firefox
  }, 30);


  el.rcEndListener = (e) => {
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
  }

  Event.addEndEventListener(el, el.rcEndListener);

  return {
    stop() {
      if (el.rcEndListener) {
        el.rcEndListener();
      }
    },
  };
}

export default domAnimation;
