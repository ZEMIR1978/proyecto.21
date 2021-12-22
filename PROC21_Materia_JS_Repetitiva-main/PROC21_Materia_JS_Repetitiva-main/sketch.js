var btn1;
var btn2;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
  
	btn1= createImg("right.png");
	btn1.position(220,200);
	btn1.size(70,70);
	btn1.mouseClicked(hForce);
  
  
  
	btn2= createImg("up.png");
	btn2.position(40,300);
	btn2.size(70,70);
	btn2.mouseClicked(vForce);

	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:.75,

}

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	ground =new Ground(200,500,830,20);
    right = new Ground(600,200,20,580);
    left = new Ground(10,200,20,580);
    top_wall = new Ground(0,10,2000,20);
	wall = new Ground(400,460,20,100);
	wall2 = new Ground(570,460,20,100);


	ball= Bodies.circle(200,100,10,ball_options);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    World.add(world,ball);
  

	Engine.run(engine);
}
  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  wall2.show();
  wall.show();
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10)
  if (keyDown("UP_ARROW")) {
  vForce()
  }
  if (keyDown("RIGHT_ARROW")) {
	hForce()
	}
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.60,y:0}); 
	
  
  }
  
  function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.60}); 
	
  
  }
  

