function setup() {
  createCanvas(800, 800);
  background(0);
  colorMode(RGB);
  frameRate(2);
}

function draw() {
  stroke(1)
  strokeWeight(1);

  // Random walk for a single particle
  let x = width / 2;
  let y = height / 2;
  let lastx = x;
  let lasty = y;
  let grayStep = 1;
  let stepLimit = 1000;

  function step() {
    for (let i = 0; i < stepLimit; i++) {

      let stepSize = random(1, 10);
      let angle = random(TWO_PI);
      x = lastx + stepSize * cos(angle);
      y = lasty + stepSize * sin(angle);
      grayStep++;
      stroke((grayStep / stepLimit) * 255);
      if (random() > 0.99999) {
        grayStep = 1
      }
      strokeWeight(round(10 - (i / stepLimit) * 10));
      line(lastx, lasty, x, y);
      lastx = x;
      lasty = y;
    }
  }

  step();
}