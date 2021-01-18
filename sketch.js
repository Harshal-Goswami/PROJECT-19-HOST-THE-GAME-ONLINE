
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation ("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite (800,350,900,10);
  ground.velocityX  = -4;
  ground.x = ground.width/2;
  
}


function draw() {
 background("lightblue;")
  drawSprites();
  
     monkey.collide(ground);
      
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
   var survivalTime=0;
  stroke(0);
  textSize(20);
  fill("white");
  text("Score : ",score , 500,50);
}