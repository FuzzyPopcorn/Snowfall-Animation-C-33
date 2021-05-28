var kidImg1, kidImg2, kidImg3;
var snowmankid, snowballkid, snowskikid;
var bgImg;
var snow1, snow2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  snows =[];

var engine, world;

function preload()
{
	bgImg = loadImage("background1.jpg")
  kidImg1 = loadImage("children1.png");
  kidImg2 = loadImage("children2.png");
  kidImg3 = loadImage("children3.png");
}

function setup() {
  createCanvas(1200,800);

  snowmankid = createSprite(300,550);
	snowmankid.addImage(kidImg1);

  snowballkid = createSprite(1000,500);
	snowballkid.addImage(kidImg2);

  snowskikid = createSprite(400,680);
	snowskikid.addImage(kidImg3);


  engine = Engine.create();
  world = engine.world;

  
  
}

function draw() {
  background(bgImg);  
  drawSprites();

  Engine.update(engine);
  if(frameCount%30===0){ 
    snows.push(new Snow(random(40, 200), 10 ))
    snows.push(new Snow(random(250, 400), 14 ))
    snows.push(new Snow(random(450, 600), 12 ))
    snows.push(new Snow(random(650, 800), 11 ))
    snows.push(new Snow(random(850, 1000), 10 ))
    snows.push(new Snow(random(1050, 1190), 14 ))

    snows.push(new Snow(random(40, 200), 60 ))
    snows.push(new Snow(random(250, 400), 64 ))
    snows.push(new Snow(random(450, 600), 62 ))
    snows.push(new Snow(random(650, 800), 61 ))
    snows.push(new Snow(random(850, 1000), 60 ))
    snows.push(new Snow(random(1050, 1190), 64 ))
  /*for (var j = 75; j <=width; j=j+120) { 
    snows.push(new Snow(j,15));
  }
  
  for (var j = 50; j <=width+100; j=j+120) 
  {
    snows.push(new Snow(j,155));
  }

  for (var j = 75; j <=width+100; j=j+120) 
  {
    snows.push(new Snow(j,295));
  }
  */
  }

  for (var i = 0; i < snows.length; i++) {
    snows[i].display();
  }

  
}

function keyPressed() {
  if(keyCode === RIGHT_ARROW){ 
		snowskikid.x = snowskikid.position.x + 25
	}
  if(keyCode === LEFT_ARROW){ 
		snowskikid.x = snowskikid.position.x - 25
	}
}
