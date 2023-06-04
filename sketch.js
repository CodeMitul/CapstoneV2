
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);

	//Create the Bodies Here.

  kicker = createImg('kicker.png')
  kicker.position(10,120)
	g1 = new Ground(200, 380 ,1200,50);

	leftside = new Ground(550,320,10,100);

	rightside = new Ground(700,320,10,100);

	var option = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Matter.Bodies.circle(220,200,20,option);
	World.add(world,ball);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  Engine.update(engine);
  g1.display();
  leftside.display();
  rightside.display();
  
  ellipse(ball.position.x, ball.position.y, 20,20);

}
function keyPressed() {
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:15,y:0})
}
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-20})
} 
	