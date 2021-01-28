var astroid;
var astroidGroup;

function preload(){
  bearImg=loadAnimation(
  "Images/bear-1.png","Images/bear-2.png","Images/bear-3.png","Images/bear-4.png","Images/bear-5.png","Images/bear-6.png","Images/bear-7.png","Images/bear-8.png","Images/bear-9.png","Images/bear-10.png","Images/bear-11.png","Images/bear-12.png","Images/bear-13.png","Images/bear-14.png","Images/bear-15.png","Images/bear-16.png","Images/bear-17.png","Images/bear-18.png","Images/bear-19.png","Images/bear-20.png","Images/bear-21.png","Images/bear-22.png","Images/bear-23.png","Images/bear-24.png","Images/bear-25.png","Images/bear-26.png","Images/bear-27.png","Images/bear-28.png","Images/bear-29.png","Images/bear-30.png","Images/bear-31.png","Images/bear-32.png","Images/bear-33.png","Images/bear-34.png","Images/bear-35.png");

    backImg=loadImage("Images/Background.png");
    astroidImg=loadImage("Images/astroids_1.png")
}


function setup() {
  createCanvas(1000,800);
  
  ground=createSprite(406,350,1200,10);
 // ground.visible=true;
  ground.addImage(backImg);
  ground.velocityX=-1;
  ground.scale=0.25;
 
  bear=createSprite(105,681, 50, 50);
  bear.addAnimation("running",bearImg);
  bear.scale=0.5;


  astroidGroup=createGroup();

}

function draw() {
  background(0);  

  Astroids();
  //bear.collide(ground);

  if(ground.x<300){
    ground.x=406;
  }

  if(keyDown(RIGHT_ARROW)){
    bear.velocityX=1;

  }

  console.log(ground);

  drawSprites();
  textSize(30);
fill("white");
text(mouseX + "," + mouseY,30,30);
}
function Astroids(){
  if(frameCount%80===0){
    astroid=createSprite(990,98,10,10);
    astroid.x=random(690,990);
    astroid.addImage(astroidImg);
    astroid.scale=0.2;
    astroid.velocityX=-3;
    astroid.velocityY=3;
    astroid.lifetime=500;
    astroidGroup.add(astroid);
  }
}