const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;
var stone2;
var stone3;
var stone4, stone5, stone6, stone7;
var Rec1,Rec2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone1=new Stone(300,580);
    stone2=new Stone(310,580); 
    stone3=new Stone(320,580);
    stone4=new Stone(330,580);
    stone5=new Stone(340,580);
    stone6=new Stone(350,580);
    stone7=new Stone(360,580);
    Rec1=new rec1(200,580);
    Rec2=new rec2(450,580)



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    Rec1.display();
    Rec2.display();

 
}