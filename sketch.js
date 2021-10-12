const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer(10,100);
    plane = new Plane(600,height,1200,20)
    rubber = new Rubber(600,400,100);
    iron = new Iron(700,500);
    stone = new Stone(500,300);
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    rubber.display();
    iron.display();
    stone.display();
    hammer.display();

    
 
}