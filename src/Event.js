import {
  START_EVENT_NAME_MAP,
  END_EVENT_NAME_MAP
} from './consts';

function getAvailableEvents(EVENT_NAME_MAP) {
  const tmpEl = document.createElement('div');
  const { style } = tmpEl;
  const events = []
  for (const baseEventType in EVENT_NAME_MAP) {
    const baseEvents = EVENT_NAME_MAP[baseEventType];
    for (const styleName in baseEvents) {
      if (styleName in style) {
        events.push(baseEvents[styleName]);
        break;
      }
    }
  }
  return events;
}

let startEvents;
let endEvents;
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  startEvents = getAvailableEvents(START_EVENT_NAME_MAP);
  endEvents = getAvailableEvents(END_EVENT_NAME_MAP);
}

const transitionEvents = {
  // Start events
  startEvents,
  // End events
  endEvents,

  addStartEventListener(el, eventListener) {
    if (startEvents.length === 0) {
      setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach((startEventName) => {
      el.addEventListener(startEventName, eventListener)
    });
  },

  removeStartEventListener(el, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach((startEventName) => {
      el.removeEventListener(startEventName, eventListener)
    });
  },

  addEndEventListener(el, eventListener) {
    if (endEvents.length === 0) {
      setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach((endEventName) => {
      el.addEventListener(endEventName, eventListener)
    });
  },

  removeEndEventListener(el, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach((endEventName) => {
      el.removeEventListener(endEventName, eventListener)
    });
  },
};

export default transitionEvents;