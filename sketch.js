
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var stone;
var mango;
var tree;

function preload()
{
	boyImage=loadImage("boy.png");


}

function setup() {
	createCanvas(1000, 500);

	





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,30);
	tree = new Tree(860,270);
	stone = new Stone(100,400,40);
	mango1 = new Mango(900,210,30);
	mango2 = new  Mango(900,120,30);
	mango3 = new  Mango(800,150,30);
	mango4 = new  Mango(770,250,30);
	mango5 = new  Mango(840,200,30);
	mango6 = new  Mango(950,200,30);
	shot = new Slingshot(stone.body,{x:100,y:400});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boyImage,90,380,100,150);

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  shot.display();

  detectcollision(mango1,stone);
  detectcollision(mango2,stone);
  detectcollision(mango3,stone);
  detectcollision(mango4,stone);
  detectcollision(mango5,stone);
  detectcollision(mango6,stone);

  
  drawSprites();
 
}
function keypressed(){
	if (keycode===32){
		Matter.body.setPosition()
		launcherObject.attach();

	}
}

function detectcollision(lmango,lstone){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);

	}


}
function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	  shot.fly()
  }



