# p5jsHackathon
Experiments with p5.js for a hackathon

Overview
This project uses machine learning to create an engaging and interactive twist on Pong. By moving their hands up and down, players can control the paddle position and interact with the game without any physical controllers.

Features
Real-Time Motion Capture: Uses PoseNet to detect hand movements and control paddle position.
Classic Pong Mechanics: Bounce the ball, avoid missing, and rack up points.
Visual Feedback: Optional visual indicators for hand detection.

Tech Stack
P5.js for game rendering and graphics.
ml5.js (PoseNet) for motion capture and hand position detection.
HTML/CSS/JavaScript for the interface and structure.


Must-Haves
Basic PoseNet Integration:

-Use ml5.js to initialize PoseNet and detect hand position.
-Capture the Y-coordinate of the right hand to control paddle movement.

Pong Game Mechanics:

-Implement classic Pong gameplay, including the ball, paddle, collision detection, and basic scoring.

Smooth Paddle Movement:
-Map hand position to paddle position on the canvas, ensuring smooth transitions to minimize jitter.

Basic UI and Game Display:
-Set up a simple UI with a canvas and start button.
-Ensure that the game resets properly when a player loses.

Should-Haves

Visual Feedback for Hand Tracking:
-Display a small circle or indicator over the detected hand in real-time to show tracking accuracy.
-Enhance player experience by showing where PoseNet detects their hand.

Game Over Screen and Scoring System:
-Display score and a “Game Over” message when a player misses the ball.
-Add a reset button to restart the game.

Paddle Smoothing and Easing:
-Implement easing on paddle movement for a smoother experience, reducing jitter.
