
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(400,200,500,30)

	bob1 = new Ball(200,550,90)
	bob2 = new Ball(300,550,90)
	bob3 = new Ball(400,550,90)
	bob4 = new Ball(500,555,90)
	bob5 = new Ball(600,550,90)

	rope1 = new Rope(bob1.body,roof1.body,-200,0)
    rope2 = new Rope(bob2.body,roof1.body,-100,0)
	rope3 = new Rope(bob3.body,roof1.body,0,0)
	rope4 = new Rope(bob4.body,roof1.body,100,0)
	rope5 = new Rope(bob5.body,roof1.body,200,0)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
 
  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  drawSprites();
 
}