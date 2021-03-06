
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundOptions;
var ball, ballOptions;
var bin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//body options
	groundOptions = {
		isStatic : true
	}

	//Create the Bodies Here.
	ground = Bodies.rectangle(400, 695, 795, 20, groundOptions);
	ball = new CrumpledPaper(50, 650);
	bin = new Bin();
	
	//add to the world
	World.add(world, ground);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  fill(100);
  rect(ground.position.x, ground.position.y, 795, 20);
  fill("magenta");
  ball.showBall();
  bin.showBin();

  if(keyDown(32)) {
	Matter.Body.applyForce(ball.body, ball.body.position, {x:0.5,y:-1.5});
  }

  yes.collide(ball);
  no.collide(ball);
  no2.collide(ball);
  
  drawSprites();
}



