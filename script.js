const states = {
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow'
};

const transitions = [
  {
    from: states.RED,
    to: states.GREEN,
    timeout: 20000
  },
  {
    from: states.GREEN,
    to: states.YELLOW,
    timeout: 15000
  },
  {
    from: states.YELLOW,
    to: states.RED,
    timeout: 5000
  }
];

let currentState = states.RED;

document.getElementById(currentState).classList.remove('off');

function buttonClicked(color) {

  if (color === currentState) {
    return;
  }

  const transition = transitions.find(t => t.from === currentState && t.to === color);

  if (transition) {
    currentState = color;

    document.getElementById(states.RED).classList.add('off');
    document.getElementById(states.GREEN).classList.add('off');
    document.getElementById(states.YELLOW).classList.add('off');
    document.getElementById(currentState).classList.remove('off');
  }
}

setInterval(() => {
  const transition = transitions.find(t => t.from === currentState);

  if (transition) {
    currentState = transition.to;

    document.getElementById(states.RED).classList.add('off');
    document.getElementById(states.GREEN).classList.add('off');
    document.getElementById(states.YELLOW).classList.add('off');
    document.getElementById(currentState).classList.remove('off');
  }
}, transitions.find(t => t.from === currentState).timeout);
