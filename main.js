song = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;

function preload() {
  song = loadSound("LLITN.mp3");
}

function setup() {
  canvas = createCanvas(550, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log("Pose Net is initialized");
}

function draw() {
    image(video, 0, 0, 550, 400);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop() {
    song.stop();
}

function gotPoses(results) {
   if (results.length > 0) {
     console.log(results);
     leftWristx = results[0].pose.leftWrist.x;
     leftWristy = results[0].pose.leftWrist.y;

     console.log("Left Wrist x = " + leftWristx + "Left Wrist y = " + leftWristy);

     rightWristx = results[0].pose.rightWrist.x;
     rightWristy = results[0].pose.rightWrist.y;
     console.log("Right Wrist x = " + rightWristx + "Right Wrist y = " + rightWristy);
   }
}