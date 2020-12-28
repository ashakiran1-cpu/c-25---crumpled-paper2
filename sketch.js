
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground,paper,dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground()
	paper=new Paper()
	//Create the Bodies Here.
	dustbin1 = new Dustbin(780,335,20,70)
	dustbin2 = new Dustbin(850,360,120,20)
	dustbin3 = new Dustbin(920,335,20,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display()
  paper.display()
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-85})
	}
}

