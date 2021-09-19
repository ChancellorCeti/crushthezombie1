const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground, leftwall, rightwall,jointpoint;
var bridge1;
var jointLink;

var stones=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  jointpoint = new Base(2000,600,200,900);
  rightwall = new Base(2000,900,200,900);
  leftwall = new Base(200,900,200,900);
  ground = new Base(1000,1000,1200,100)
  bridge1 = new Bridge(50,{x:200,y:500});
  Matter.Composite.add(bridge1.body,jointpoint);
  jointLink = new Link(bridge1,jointpoint);
  
  for(var i=0;i<=8;i++){
    var x =random(width/2-200,width/2+300);
    var y=(-10,140);
    Stone = new stone(x,y,80,80);
    stones.push(Stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  rightwall.show();
  leftwall.show();
  ground.show();
  bridge1.show();
  for(var Stone of stones)
  Stone.show();
  
}
