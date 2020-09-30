var wall,thickness;
var speed,wieght,bullet;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
wall = createSprite(1200,200,thickness,height/2);
bullet.velocityX = 6; 
thickness=random(22,83);
speed = random(223,321);
weight = random (30,52);
damage=0.5*weight*speed*speed/(thickness*thickness*thickness) ;

}

function draw() {
  background("black");  
 
 if (abs(bullet.x-wall.x)<=(bullet.width/2+wall.width/2))
 {
   bullet.setVelocity(0,0);
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10)
{
  bullet.shapeColor=color(255,0,0);
}

if (damage<10)
{
  bullet.shapeColor=color(0,255,0);
}

 }

  drawSprites();
  }


