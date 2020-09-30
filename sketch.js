
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var paper;

function preload() {
  bin = loadImage("sprites/dustbingreen.png");
  backgroundImg = loadImage("sprites/seen.jpg");
 }

function setup() {
	createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2,580,1200,20);
	box1 = new Box(824,495,20,150);
	box2 = new Box(910,560,145,20);
  box3 = new Box(994,495,20,150);
  paper = new Paper(100,370,80,80);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  imageMode(CENTER);
  image(bin,910,470,160,170);
  drawSprites();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
 }

function keyPressed(){ if(keyCode === UP_ARROW){ 
  Matter.Body.applyForce(paper.body,paper.body.position,{x:340,y:-340}); 
  } 
}

