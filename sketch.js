const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform1,platform2;
var hexagon, slingShot;


function setup(){
    var canvas = createCanvas(1600,765);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width,height,3200,20);
    platform1 = new Ground(1100, 305, 450, 20);
    platform2 = new Ground(800, 605, 350, 20);

    box1 = new Box(900,300,50,50);
    box2 = new Box(950,300,50,50);
    box3 = new Box(1000,300,50,50);
    box4 = new Box(1050,300,50,50);
    box5 = new Box(1100,300,50,50);
    box6 = new Box(1150,300,50,50);
    box7 = new Box(1200,300,50,50);

    box8 = new Box(950,250,50,50);
    box9 = new Box(1000,250,50,50);
    box10 = new Box(1050,250,50,50);
    box11 = new Box(1100,250,50,50);
    box12 = new Box(1150,250,50,50);

    box13 = new Box(1000,200,50,50);
    box14 = new Box(1050,200,50,50);
    box15 = new Box(1100,200,50,50);

    box16 = new Box(1050,200,50,50);


    box17 = new Box(650,600,50,50);
    box18 = new Box(700,600,50,50);
    box19 = new Box(750,600,50,50);
    box20 = new Box(800,600,50,50);
    box21 = new Box(850,600,50,50);


    box22 = new Box(700,550,50,50);
    box23 = new Box(750,550,50,50);
    box24 = new Box(800,550,50,50);

    box25 = new Box(750,500,50,50);
    

    // bird = new Bird(200,50);

    // //log6 = new Log(230,180,80, PI/2);
    // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
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
    box24.display();
    box25.display();


    ground.display();
    platform1.display();   
    platform2.display();
}

// function mouseDragged(){
//     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
// }

 
// function mouseReleased(){
//     slingshot.fly();
// }
