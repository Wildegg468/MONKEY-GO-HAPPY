var PLAY;
var END;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gs;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");

obstacleGroup = createGroup();
FoodGroup = createGroup();  
  
}



function setup() {
createCanvas(600,500);
  
monkey = createSprite(80,315,20,20);  
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1; 
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;  

gs = PLAY;  
score = 1;
  
//obstacleGroup.setCollider("circle",0,0,40);
//why does this ^ not work
//              |  
//monkey.debug = true;  
}


function draw() {
background("skyblue");

if(gs === PLAY) 
{

  
if(keyDown("space") && monkey.y > 300)
{
monkey.velocityY = -16;    
}
  
if(FoodGroup.isTouching(monkey))  
{
score = score + 1;
FoodGroup.destroyEach();  
}  
  
if(monkey.isTouching(obstacleGroup))
{
obstacleGroup.destroyEach();
  
score = score -1;  
}  
  
  
  
  
  
}
  
text("score: " + score,535,30);  
  
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);  
  
banana();

ground.x = ground.width/2;

obstacle();
  
drawSprites() 
}

function banana()
{
if(frameCount % 80 === 0)
{
var banana = createSprite(600,random(120,200),20,20);
banana.velocityX = -4;   
banana.addImage(bananaImage);
banana.scale = 0.1;  
  FoodGroup.add(banana);  
}  
}
  
function obstacle()
{
if(frameCount % 200 === 0)
{  
var obstacle = createSprite(600,310,40,40);
obstacle.velocityX = -4;    
obstacle.addImage(obstacleImage); 
obstacle.scale = 0.2; 
  
obstacleGroup.add(obstacle);  
}  
  
  
}
  
  





