var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedrect=createSprite(200,200,50,80)
  fixedrect.shapeColor="green"
  movingrect=createSprite(400,200,80,30)
  movingrect.shapeColor="green";
}

function draw() {
  background("black"); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x)
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x< fixedrect.width/2+movingrect.width/2 &&
     
     ) 
      
{
        movingrect.shapeColor="red"
        fixedrect.shapeColor="red"

      }
  else
  {
    movingrect.shapeColor="green"
   fixedrect.shapeColor="green"
  }
  drawSprites();
}