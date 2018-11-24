'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _consts = require('./consts');

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
    delete _consts.START_EVENT_NAME_MAP.animationstart.animation;
    delete _consts.END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete _consts.START_EVENT_NAME_MAP.transitionstart.transition;
    delete _consts.END_EVENT_NAME_MAP.transitionend.transition;
  }

  startEvents = getAvailableEvents(_consts.START_EVENT_NAME_MAP);
  endEvents = getAvailableEvents(_consts.END_EVENT_NAME_MAP);
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

exports['default'] = transitionEvents;
module.exports = exports['default'];