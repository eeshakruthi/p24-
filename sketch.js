const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

paper = new Paper(100,650,10);
floor = new Ground(400,680,800,40);
leftBin=new Bin(550,620,20,100);
bottomBin=new Bin(610,660,100,20);
rightBin=new Bin(670,620,20,100);
    
	Engine.run(engine);
}


function draw() {
rectMode(CENTER);

background(0);

Engine.update(engine);

paper.display();
floor.display();
leftBin.display();
rightBin.display();
bottomBin.display();
  
drawSprites();
}

function KeyPressed(){
	if (keyCode===SPACE){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15,y:-15})	
	}
};


