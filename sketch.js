
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var holder;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	holder = new Holder(400,100,600,30)
	ball1 = new Ball(200,400);
	ball2 = new Ball (300,400);
	ball3 = new Ball(400,400);
	ball4 = new Ball(500,400);
	ball5 = new Ball(600,400);

	chain = new Chain(holder.body,ball1.body,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  holder.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain.display();
  drawSprites();
 
}



