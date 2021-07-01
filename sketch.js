var test;





var bath;
var brush;
var drink;
var eat;
var gym1, gym2;
var bg, bgImg;
var move;
var sleep;
var astronaut;

function preload() 
{
  brush = loadImage("images/brush.png");
  bgImg = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  bath = loadAnimation("images/bath1.png" , "images/bath2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  gym1 = loadAnimation("images/gym1.png", "images/gym2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  move = loadAnimation("images/move1.png", "images/move2.png");
}

function setup() 
{
  createCanvas(800,400);

  bg = createSprite(400, 200, 50, 50);
  bg.scale = 0.17;
  bg.addImage(bgImg);

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.scale = 0.1;
  astronaut.addAnimation("sleeping", sleep);

}

function draw() 
{
  background(25,255,255);
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW"))
  {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW"))
  {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = random(-10,10);
    astronaut.velocityY = random(-10,10);
  }

  if(keyDown("LEFT_ARROW"))
  {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW"))
  {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("G"))
  {
    astronaut.addAnimation("gymming1", gym1);
    astronaut.changeAnimation("gymming1");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("h"))
  {
    astronaut.addAnimation("gymming2", gym2);
    astronaut.changeAnimation("gymming2");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();

  fill("orange");
  textSize(20);
  text("INSTRUCTIONS : ", 20,30);

  fill("green");
  text("Up Arrow = Brushing", 20,60);

  fill("red");
  text("Down Arrow = Moving", 20,80);

  fill("green");
  text("Left Arrow = Eating", 20,100);

  fill("red");
  text("Right Arrow = Bathing", 20,120);

  fill("green");
  text("G = Gymming1", 20,140);

  fill("red");
  text("H = Gymming2", 20,160);
}