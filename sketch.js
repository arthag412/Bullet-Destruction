var thickness,wall;
var bullet;
var speed;
var weight;



function setup() {
  createCanvas(1600,400);
  thickness=Math.round(random(22,83));
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet=createSprite(50, 200, 120, 44);
  bullet.velocityX = speed;
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  
  if(collided(bullet,wall))
    
    {
     bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/ (thickness*thickness*thickness);
     if(damage>10){
       bullet.shapeColor=color("red");
     }
     if(damage<=10){
      bullet.shapeColor=color("green");
    }
    }

  drawSprites();
}
function collided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}