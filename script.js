let capture;

function setup() {
  createCanvas(640, 480); // Increase canvas size
  capture = createCapture(VIDEO);
  capture.size(640, 480); // Increase video size
  capture.hide(); // Hide the extra video element
}

function draw() {
  background(255);
  if (capture.loadedmetadata) { // Ensure the video has loaded
      image(capture, 0, 0, 640, 480);
  }
}