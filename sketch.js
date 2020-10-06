
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,300,'red');
	bob2 = new Bob(360,300,"blue");
	bob3 = new Bob(320,300,"yellow");

	bob4 = new Bob(400+40,300,"green");
	bob5 = new Bob(400+2*40,300,"orange");
	roof = new Roof(400,10,800,20);
	rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0);

	

	

	
	


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display()

  bob4.display();
  bob5.display();
  rope.display()
  
 
  
  drawSprites();
 
}



