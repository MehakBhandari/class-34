const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var rope;
var box1;box2;box3;box4;box5;box6;box7;box8;box9;box10;box11;box12;box13;box14;box15;box16;box17;box18;box19;box20;box21;box22;box23;




function setup(){
    var canvas = createCanvas(1200,750);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,240,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    box5 = new Box(700,240,70,70);
    box6 = new Box(700,240,70,70);
    box7 = new Box(700,240,70,70);
    box8 = new Box(700,240,70,70);

    box9 = new Box(920,240,70,70);
    box10 = new Box(920,320,70,70);
    box11 = new Box(920,320,70,70);
    box12 = new Box(920,320,70,70);
    box13 = new Box(920,320,70,70);
    box14 = new Box(920,320,70,70);
    box15 = new Box(920,320,70,70);
    box16 = new Box(920,320,70,70);

    box17 = new Box(810,160,70,70);
    box18 = new Box(810,160,70,70);
    box19 = new Box(810,160,70,70);
    box20 = new Box(810,160,70,70);
    box21 = new Box(810,160,70,70);
    box22 = new Box(810,160,70,70);
    box23 = new Box(810,160,70,70);

    ball = new Ball(200,500,80,80);

    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:500, y:250});
}

function draw(){
    
        background("white");

    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();

    ground.display();
    ball.display();
    //log6.display();
    rope.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}





