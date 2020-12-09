var car,wall
var speed,weight

function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(700,200,60,200);
  speed = random(55,90)
  weight = random(400,1500)
car.velocityX = speed

}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<(car.width/2+wall.width/2)){
    car.velocityX = 0
  car.x = wall.x-50
  def = 0.5*weight*speed*speed/22500
  if(def>180){
    car.shapeColor = "red"
  }
  if(def<180&&def>100){
    car.shapeColor = "lightpink"
  }
  if(def<100){
    car.shapeColor = "lightblue"
  }

  } 
  drawSprites();
}