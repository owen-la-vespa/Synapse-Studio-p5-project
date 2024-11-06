let handPose;
let video;
let hands = [];

function setup() {
  createCanvas(640, 480);
  
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Initialize handPose model with the video feed
  handPose = ml5.handpose(video, modelReady);

  // Listen for the "predict" event to get hand data
  handPose.on('predict', gotHands);
}

function modelReady() {
  console.log("Handpose model loaded!");
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.landmarks.length; j++) {
      let keypoint = hand.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint[0], keypoint[1], 10);
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  hands = results; // Save the hand data to the global variable
}
