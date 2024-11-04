function setup() {
  createCanvas(600, 600);
  background(0);
  colorMode(RGB)
}

function draw() {
  stroke(random(255));
  strokeWeight(1);

  // Random walk for a single particle
  let x = width / 2;
  let y = height / 2;

  let i = 0;
  function step() {
    if (i < 100) {
      let stepSize = random(1, 50);
      let angle = random(TWO_PI);
      x += stepSize * cos(angle);
      y += stepSize * sin(angle);
      point(x, y);
      i++;
      setTimeout(step, 10); // Delay of 10 milliseconds
    }
  }

  step();
}