
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,ground,h1,h2,h3,h4;	
var n1,n2,n3,n4,n5;
var bobDiameter;


function preload()
{
	
}

function setup() {
engine = Engine.create();
world = engine.world;
createCanvas(1200, 500);
 //Create the Bodies Here.
 ground=new Roof(600,100,250,20);
n1=new Bob(600,200);
n2=new Bob(650,200);
n3=new Bob(550,200);
n4=new Bob(500,200);
n5=new Bob(700,200);
h1=new Rope(n1.body,{x:600,y:100});
h2=new Rope(n2.body,{x:650,y:100});
h3=new Rope(n3.body,{x:550,y:100});
h4=new Rope(n4.body,{x:500,y:100});
h5=new Rope(n5.body,{x:700,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
 ground.display();
 n1.display();
 n2.display();
 n3.display();
 n4.display();
 n5.display();
 h1.display();
 h2.display();
 h3.display();
 h4.display();
 h5.display();
  drawSprites();
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(n4.body,n4.body.position,{x:-150,y:150})



}




}






