
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var doremon;
var ball1,ball2,ball3,ball4,ball5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(700,700);

	engine = Engine.create();
	world = engine.world;

  doremon = new Roof(350,150,370,46);

  ball1 = new Ball(250,500,24);
  ball2 = new Ball(300,500,24);
  ball3 = new Ball(350,500,24);
  ball4 = new Ball(400,500,24);
  ball5 = new Ball(450,500,24);

  rope1= new Rope(ball1.body,doremon.body,-100,0)
  rope2= new Rope(ball2.body,doremon.body,-50,0)
  rope3= new Rope(ball3.body,doremon.body,0,0)
  rope4= new Rope(ball4.body,doremon.body,50,0)
  rope5= new Rope(ball5.body,doremon.body,100,0)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(23);

    doremon.displayer();
  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();




  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  


  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-25})
  }
}



