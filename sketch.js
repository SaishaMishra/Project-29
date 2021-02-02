const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground1, block1;
var world;
var slingshot1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	block1=new block(330,235,30,40);
    block2=new block(360,235,30,40);
    block3=new block(390,235,30,40);
    block4=new block(420,235,30,40);
    block5=new block(450,235,30,40);
    block6=new block(360,235,30,40);
    block7=new block(390,235,30,40);
    block8=new block(420,235,30,40);
    block9=new block(40,235,30,40);
    
    
	slingshot1=new SlingShot(hexagon1.body,{x:290,y:430});

	
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
 
  

  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  hexagon1.display();
  slingshot1.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot1.fly();
}

