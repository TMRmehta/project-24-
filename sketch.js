var paper1,ground,dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var log1,log2,log3
var dustbinLeft,dustbinRight,dustbinBottom
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(200,500,20)



	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 log1=new Dustbin(1200,660,200,20);
	 log1.shapeColor=color("red");
	 log2=new Dustbin(1110,620,20,100);
	 log2.shapeColor=color("red");
	 log3= new Dustbin(1290,620,20,100);
	 log3.shapeColor=color("red");
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


