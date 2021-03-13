
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var treeObj;
var groundObject, slingShot,engine,mango2,mango3,mango4,mango5,mango6;
var mango1;
var world,boy;
var canvas, stone,state="onSling";
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	canvas=createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1150,150,30);
  mango3=new mango(1050,50,30);
  mango4=new mango(1000,250,30);
  mango5=new mango(1100,180,30);
  mango6=new mango(1025,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(235,420);
    slingShot = new Sling(stone.body,{x:stone.body.position.x,y:stone.body.position.y});
	
	
}

function draw() {

  background(230);
  Engine.update(engine);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  groundObject.display();
  stone.display();
  slingShot.display();
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
}


function mouseDragged(){
  if(state==="onSling"){
	Matter.Body.setPosition(stone.body,{ x : mouseX , y : mouseY });
  }
}
function mouseReleased(){
	slingShot.fly();
  state="launch";
}
function keyPressed(){
  slingShot.attach(stone.body);
  state="onSling";
}
function detectCollision(body1,body2){
  var distance = dist(body1.body.position.x,body1.body.position.y,body2.body.position.x,body2.body.position.y);
    if(distance<=body1.r+body2.r){
      Matter.Body.setStatic(body1.body,false);
    }
}

 