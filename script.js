let score;
let tick;
let startTime;
let timeElapsed;
let lastScore;
const gameTime = 100;

let alreadyPlayed = false;
let stopped = true;
let timeInterval;

function setup() {
    createCanvas(500, 500);
}

function initialize() {
  timeInterval = setInterval(() => {
    timeElapsed++;
  }, 100);
  console.log('init')
}

function mousePressed() {
  if (!stopped) {
    score++
    timeElapsed = 0
    return;
  }
  stopped = false;
  alreadyPlayed = true;
  tick = 0;
  startTime = new Date().getTime();
  timeElapsed = 0;
  score = 0;
  lastScore = null;
  initialize();
  loop();
  console.log('click')
}

function draw() {
  if (stopped) {
    background(100, 100, 100, 245);
    textAlign(CENTER);
    textSize(60);
    fill(255);
    if (alreadyPlayed) {
      text('Game over', width / 2, height / 2 - 30);
      textSize(40);
      text(`Final score: ${score}`, width / 2, height / 2 + 30);
    } else {
      text('Tap to play', width / 2, height / 2);
    }
    noLoop();
    return;
  }
  tick++;
  if (timeElapsed > gameTime) {
    stopped = true;
    clearInterval(timeInterval);
  }
  background(50);
  drawScene()
}

function drawScene() {
  noStroke();
  fill(180);

  if (lastScore && tick - lastScore < 40) {
    fill(lerpColor(color(173, 235, 177), color(100), (tick - lastScore) / 40));
  }
  noStroke();
  fill(250);
  textAlign(CENTER);
  textSize(80);
  text(score, width/2, height/3);

  textAlign(CENTER);
  text(`${(gameTime - timeElapsed)/10}s`, width/2, height/1.5);
}