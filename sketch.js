var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,appleImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
var rand=Math.floor(random(50,350))
console.log(rand);





function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnClouds();
   drawSprites();
}
  

function spawnClouds(){
if(frameCount % 80==0)
{
  apple = createSprite(350,40, 10, 10);
  apple.x=Math.floor(random(50,350));
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.lifetime=150;
}
if(frameCount % 80==0) {
orangeL = createSprite(360,40, 10, 10);
orangeL.x=Math.floor(random(50,350));
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}
if(frameCount % 80==0) {
redL = createSprite(340,40, 10, 10);
redL.x=Math.floor(random(50,350));
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
}