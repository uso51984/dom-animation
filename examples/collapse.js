import anim from 'dom-animation';
import React from 'react';
import ReactDOM from 'react-dom';

const style = `
.box {
  background:red;
  width:100px;
  height:100px;
}
.collapse-active {
  transition: height 5s ease-out;
}
`;

let show = true;

function toggle() {
  const t = document.getElementById('t');
  const b = document.getElementById('b');
  b.disabled = true;
  t.style.display = '';
  let height;
  anim(t, `collapse`, {
    start() {
      if (show) {
        t.style.height = `${t.offsetHeight}px`;
      } else {
        height = t.offsetHeight;
        t.style.height = 0;
      }
    },
    active() {
      console.log('[----------')
      t.style.height = `${show ? height : 0}px`;
    },
    end() {
      t.style.display = show ? '' : 'none';
      b.disabled = false;
      t.style.height = '';
    },
  });
  show = !show;
}

ReactDOM.render(<div>
  <style dangerouslySetInnerHTML={{ __html: style }}></style>
  <div className="box" id="t">
  </div>
  <button onClick={toggle} id="b">toggle</button>
</div>, document.getElementById('__react-content'));
