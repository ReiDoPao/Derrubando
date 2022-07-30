
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var solo;
var objeto1,objeto2,objeto3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;
	
	//atributos dos coiso
	var solo_options = {
		isStatic: true
	}
	var objeto1_options = {
	 restitution: 0.8,
	 friction:0.1,
	 frictionAir:0
	}

	var objeto2_options = {
		restitution:0,
		friction:1,
		frictionAir:0.4
	}

	var objeto3_options = {
		restitution:0.9,
		friction:0.1,
		frictionAir:0
	}

	//Crie os Corpos Aqui.

	solo = Bodies.rectangle(400,800,800,15, solo_options);
	World.add(world, solo);

	objeto1 = Bodies.circle(400,40,40,objeto1_options);
	World.add(world, objeto1);

	objeto2 = Bodies.rectangle(200,40,50,50,objeto2_options);
	World.add(world, objeto2);

	objeto3 = Bodies.rectangle(600,40,20,20,objeto3_options);
	World.add(world, objeto3);


	Engine.run(engine);
  
}


function draw() {
  background("#120a8f");
  Engine.update(engine);

  rectMode(CENTER);
  
  rect(solo.position.x, solo.position.y,800,15);

  circle(objeto1.position.x,objeto1.position.y,40);

  rect(objeto2.position.x, objeto2.position.y,50,50);

  rect(objeto3.position.x,objeto3.position.y,20,20);

  
  drawSprites();
}



