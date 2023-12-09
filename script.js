let score;
let tick;
let startTime
let timeElapsed;
let lastScore;
let runs = 0;
let gameTime = 1000;
let alreadyPlayed = false;
let stopped = true;
let timeInterval;
let running = false;

function setup() {
    createCanvas(600, 500);
}

function initialize() {
  timeInterval = setInterval(() => {
    if (running == true) {
      timeElapsed--;
    };
  }, 100);
  console.log('init')
}
function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  score -= event.delta/10;
  //uncomment to block page scrolling
  //return false;
}
function keyPressed(){
  if (running == true){
    running = false;
  }
  else{
    running = true;
  }
}
function mouseReleased() {
  if (!stopped){
  timeElapsed += score
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
  if (timeElapsed >= 0){
    background(50);}
  else{
    background("red");
  }
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
  textSize(120);
  text((score/10), width/2, height/3);
  if(timeElapsed > 0){minutes = floor(timeElapsed/600);}
  else{minutes = ceil(timeElapsed/600);}
  seconds = (timeElapsed - minutes*600)/10;

  textAlign(CENTER);
  text(`${minutes}m${seconds}s`, width/2, height/1.25);
}