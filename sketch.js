
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var score=0;
var FoodGroup,obstaclesGroup
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,400)
  var survivalTime=0;
 
  
 
  
  monkey=createSprite(90,290,15,15)
monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.2

   ground=createSprite(400,350,900,10)
  ground.velocityX=-2
  ground.x=ground.width/2;
  console.log(ground.x)
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
background("blue")
  
  if(ground.x<0){
 ground.x=ground.width/2     
  }
  if(keyDown("space") ){
   monkey.velocityY=-12; 
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  if(obstaclesGroup.isTouching(monkey)){
   ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityEach(0);
    FoodGroup.setVelocityEach(0);
     obstaclesGroup.setLifeTimeEach(-1);
    FoodGroup.setLifeTimeEach(-1);
    
  }
  
   monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50);
  text("score: "+score, 500,50);
  console.log(mouseX+";"+mouseY)
 
 drawSprites(); 
}

function spawnFood(){
  if(frameCount%80===0){
banana=createSprite(200,150,40,10)
    
    banana.velocity=-5;
      
    banana.lifeTime=300;
    monkey.depth=banana.depth+1;
    
    banana.addImage(bananaImage)
  banana.scale=0.1
    FoodGroup.add(banana);
    
  }
  
}

function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(300,315,20,20)
  obstacle.addImage(obstaceImage)
  obstacle.scale=0.2
    obstacle.velocityX =-6;
    obstacle.lifeTime=300;
    obstaclesGroup.add(obstacle)
   
  }
}



