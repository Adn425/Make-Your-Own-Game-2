var player;

gameState = 0;

function preload() {
  caveImg = loadImage("images/cave image.jpg");
  startingCaveImg = loadImage("images/cave opening image.jpg");
  flockOfBats1 = loadImage("images/flock of bats 1.jpg");
  flockOfBats2 = loadImage("images/flock of bats 2.jpg");
  flockOfBats3 = loadImage("images/flock of bats 3.jpg");
  playerImg = loadImage("images/player image.png");
  startButtonImg = loadImage("images/start button.png");
}

function setup() {
  createCanvas(800,500);
  startButton = createSprite(400,320);
  startButton.addImage(startButtonImg);
  startButton.scale = 0.25;
}

function draw() {
  background(caveImg);

  if(gameState === 0) {
    textSize(24);
    fill("white");
    text ("Avoid the obstacles to reach the treasure!", 200,200);
    textSize(20);
    text ("Click the start button to start", 275,250);
  }
  
  
  if(mousePressedOver(startButton)) {
    gameState = 1;
    startButton.visible = false;
  }
  if(gameState === 1) {
    player = createSprite(200,325);
    player.addImage(playerImg);
    player.scale = 0.3;
  }

  drawSprites();
}
