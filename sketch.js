var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	edges = createEdgeSprites();

	fairy = createSprite(240, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	

	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  keyPressed();
  keyPressed2();
  fall();

  //fairyVoice.play();


  if(star.isTouching(fairy)&&star.y>470){
	  Matter.Body.setStatic(starBody,true);
	  starBody.position.x
	  star.x = star.x;
	  star.y = star.y;
  }

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("right")&&fairy.x<800){
		fairy.x=fairy.x+5;
	}
}

function keyPressed2() {
	//write code here
	if(keyDown("left")&&fairy.x>0){
		fairy.x=fairy.x-5;
	}
}

function fall(){
	if(keyDown("down")){
		Matter.Body.setStatic(starBody,false);
	}
}