var seaImage,sea
var shipImg1
function preload(){
 seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(400,400);
  
  sea=createSprite(200,180,400,20)
  sea.x=sea.width/2
sea.addImage("seaImg",seaImg);
sea.velocityX=-2
ship=createSprite(200,300,50,50)
ship.addAnimation("ship",shipImg1)
ship.scale = 0.2

}

function draw() {
  background("blue");
 drawSprites()

 if(sea.x < 0){
  sea.x = sea.width/2;
  }

  drawSprites()

}



