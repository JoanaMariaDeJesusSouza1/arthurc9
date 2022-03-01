var box;

function setup() {
  createCanvas(500,500);
  box=createSprite(250,250,30,30);
  box.shapeColor="blue";

}

function draw() 
{
   background(0);

   if (keyIsDown(UP_ARROW)) {
     box.y= box.y-3;
   }else if(keyDown("down")){
     box.y+=3;
   }
   if(keyDown("space")){
     background("white")
   }else{
     background("black");
   }
  drawSprites();
}




