var bg;
var bgimage;
var canvas;

var blueFireBall,bluefireBallImg

var spaceShip,spaceShipImg;
var astronaut,astronautImg;

var spaceShipGroup;

function preload(){
  bgimage=loadImage("background.jpg");

  bluefireBallImg=loadImage("bluefireball.gif");

  spaceShipImg=loadImage("ufo.gif")

  astronautImg=loadImage("astronaut.gif")

}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
  //createcanvas(600,800);
  bg=createSprite(windowWidth/2,windowHeight/2,20,20)
  bg.addImage("back",bgimage)
  bg.scale = 2.5 ;

  astronaut=createSprite( displayWidth-220,displayHeight-500.20,20);
  astronaut.addImage("astronaut",astronautImg);
  astronaut.scale=0.5

  spaceShipGroup= new Group()  

}

function spawnspaceShip(){
  if(frameCount %100 === 0){
    spaceShip=createSprite(random(50,300),random(50,500),40,40);
      spaceShip.addImage("spaceship",spaceShipImg);
        spaceShip.velocityX=3;
          spaceShip.scale=0.5;
          spaceShip.lifeTime=400;
          spaceShipGroup.add(spaceShip);
  }
}


function draw(){
  background(0);

  if(keyDown("UP")){
    astronaut.y=astronaut.y-10
  }

  if(keyDown("DOWN")){
    astronaut.y=astronaut.y+10
  }

  if(keyDown("SPACE")){
    blueFireBall=createSprite(displayWidth-200,displayHeight-500.20,20)
    blueFireBall.addImage("fireball",bluefireBallImg)
    blueFireBall.scale=0.1
    blueFireBall.velocityX=-3;

  }


  spawnspaceShip()    

  drawSprites();
}
