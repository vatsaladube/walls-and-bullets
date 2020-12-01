function setup() {
  createCanvas(1600,400);
  speed=random(223,321) 
  weight=random(30,50)
  thickness=random(22,83)
 bullet=createSprite(50, 200, 50, 5);
 wall=createSprite(1200,200,thickness,height/2)
bullet.velocityX=speed



}
var weight 
var bullets
var wall
var speed

function draw() {
  background(0); 
if (hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
  wall.shapeColor=("red")
}
if(damage<10){
  wall.shapeColor=("green")
}
}
  drawSprites();
}
function hasCollided(b,w){
  bulletRightedge=b.x+b.width
  wallLeftedge=w.x
  if (bulletRightedge>=wallLeftedge){
    return true 
  }

return false
}