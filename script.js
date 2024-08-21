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
let running = 0;
let mySound;
let todaysDate = new Date()
let timerStart;
let timerCurrent;
let counter = 0;
let lastTimestamp = 0;
const targetFPS = 10;
startTime = new Date().getTime();
//function preload() {
//  soundFormats('mp3', 'ogg');
//  mySound = loadSound('ringsound.mp3');
//}

function setup() {
    createCanvas(600, 500);
}


function initialize() {
  timeInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    startTime = new Date().getTime();
    if(running > 0){
    timeElapsed -= elapsedTime/100;}
    }, running);
  
}


function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  score -= event.delta/10 * 100;
  //uncomment to block page scrolling
  //return false;
}
function keyPressed(){
  console.log(key);
  if (key === 'Enter') {
    if (running > 0){
      running = 0;
    }
    else{
      running = 100;
      console.log('going');
    }
  }
  if (key === 'Shift') {
    if (running > 0){
      running = 0;
    }
    else{
      running = 75;
      console.log('going');
    }
  }

//  mySound.play()
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
  noStroke();
  fill(250);
  textAlign(CENTER);
  textSize(120);
  if(score > 0){minutes = floor(score/600);}
  else{minutes = ceil(score/600);}
  seconds = (score - minutes*600)/10;
  text(` ${minutes}m${seconds}s`, width/2, height/3);
  if(timeElapsed > 0){minutes = floor(timeElapsed/600);}
  else{minutes = ceil(timeElapsed/600);}
  seconds = floor(timeElapsed - minutes*600)/10;

  textAlign(CENTER);
  text(`${minutes}m${seconds}s`, width/2, height/1.25);
}