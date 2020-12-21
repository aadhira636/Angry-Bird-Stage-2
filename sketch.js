const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird;
var pig1,pig2;
var bgImage;
var platform;
var log,sling1;

function preload(){
    bgImage = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,50,50);
    box2 = new Box(780,300,50,50);

    log1 = new Log(690,200,20,300,PI/2);

    box3 = new Box(600,190,50,50);
    box4 = new Box(780,190,50,50);

    log2 = new Log(690,150,20,300,PI/2);

    box5 = new Box(685,130,70,70);

    log3 = new Log(655,100,20,150,PI/5.2);

    log4 = new Log(760,100,20,150,-PI/5.2);

    ground = new Ground(600,height,1200,20);

    bird = new Bird(100,100);

    pig1 = new Pig(690,300,50,50);
    pig2 = new Pig(690,180,50,50);

    platform = new Ground(0,height,300,600);

    log = new Log(230,180,20,80,PI/2);

    sling1 = new Slingshot(bird.body,log.body);

}

function draw(){
    imageMode(CORNERS);
    background(bgImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    fill("yellow");
    box1.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();
    bird.display();
    pig1.display();
    pig2.display();
    platform.display();
    log.display();
    sling1.display();
}