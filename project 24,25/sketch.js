
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper1,Dustbin1,Dustbin2,Dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1 = new Ground(400,670,2000,20)

  Dustbin1 = new Dustbin(1050,650,150,20)
  Dustbin2 = new Dustbin(1130,610,20,100)
  Dustbin3 = new Dustbin(965,610,20,100)


  Paper1 = new Paper(20,650,50)
 
	Engine.run(engine);
 }


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  Paper1.display();
 
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:140,y:-140})
	}
	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:-140,y:-140})
	}
}

