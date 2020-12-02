
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box4 = new Box(350,80,300,20);

	var ball_options = {
		restitution : 0.8,
		isStatic :true
		}
		ball = Bodies.circle(350,280,30,ball_options);
		World.add(world, ball);
		
	
		


	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 30, 30);
  
  

 
  box4.display();
  ;

  
  drawSprites();
 
}



