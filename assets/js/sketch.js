let xspacing = 1; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

var canvasDiv = document.getElementById('canvaGen');

function setup() {
var width = canvasDiv.offsetWidth;
var height = 300;
let render = createCanvas(width, height);
render.parent("canvaGen");
render.style('margin-left', '-15px');
w = width + 16;
dx = (TWO_PI / period) * xspacing;
yvalues = new Array(floor(w / xspacing));
}


function draw() {
 
  background(255,255,255,0);
  calcWave();
  renderWave(230, 9, 116,5);
  NcalcWave();
  renderWave(240,7,7,5);
  cosWave();
  renderWave(220,9,10,5);
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.001;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function NcalcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
   let ntheta = theta + 0.1;
   

  // For every x value, calculate a y value with sine function
  let x = ntheta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = -sin(x+0.5) * amplitude;
    x += dx;
  }
}
function cosWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
   let ntheta = theta + 0.1;
   

  // For every x value, calculate a y value with sine function
  let x = ntheta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = cos(x) * amplitude;
    x += dx;
  }
}



function renderWave(ra,rb,rc,rd) {
  noStroke();
  fill(ra,rb,rc,rd);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 3 + yvalues[x], 1, 1);
  }
 
}

function windowResized() {
setup();
}

