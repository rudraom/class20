
var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true
  fixedRect.velocityX=3;
  movingRect=createSprite(700, 200, 50, 80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=-3;

}

function draw() {
  background(255,25,255);  
 // movingRect.x=mouseX;
 // movingRect.y=mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2){
      movingRect.velocityX= movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
    
    if(movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
      movingRect.velocityY= movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
    }
  drawSprites();
}