
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball, ground, leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);

	engine = Engine.create();
	world = Engine.world;

	ground = new Ground(350,670,700,20);
	leftSide = new Ground(1100,600,20,120);

	var ball_options = {
    isStatic :false,
	restitution: 0.3,
	friction:0,
	density:1.2,

	}

	ball = Bodies.circle(300,50,30,ball_options);
	World.add(world, ball);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.show();
  leftSide.show();
  Engine.update(engine);

  fill("white");
  ellipse(ball.position.x,ball.position.y,30,ball_options);

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === "UP_ARROW"){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}
}


