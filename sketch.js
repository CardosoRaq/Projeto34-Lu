const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world, engine;

var bgImg, guindasteImg;

function preload(){
  bgImg = loadImage("/assets/cidade.png");
  guindasteImg = loadImage("/assets/guindaste.png");
}

function setup() {
  createCanvas(700,400);

  engine = Engine.create();
  world = engine.world;


  
}


function draw() {
  background(101,202,252);
  
  image(bgImg, 0,0,700,400);

  Engine.update(engine);


  
}

