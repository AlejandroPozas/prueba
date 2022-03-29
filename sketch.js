
var sea;
var ship;
var ship_moving;
function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(1200,1200);

 sea=createSprite(600,600,1200,1200);
 ship=createSprite(200,280,50,50);
 sea.addImage(sea.png);
 ship.addAnimation("moving", ship_moving);
 ship.scale=0.5; 
}

function draw() {
  background("white");


  drawSprites();
}