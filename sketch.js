
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grod,boy;
function preload()
{
	
}

function setup() {
	createCanvas(1500,600);


	engine = Engine.create();
	world = engine.world;

	grod = new ground(750,590,1500,20)
    boy = new Boy(200,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightSkyBlue");
  grod.display();
  boy.display();
  drawSprites();
 
}



