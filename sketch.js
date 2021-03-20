const
Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisions = [];

var scorers = [];

var divisionHeight = 300;

var attemptsLeft = 5;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  // ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 5, divisionHeight));
    scorers.push(new Scorer(k+40, height, 60, 20, 10));
  }

  for (var j = 75; j <= width; j += 50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width-10; j += 50)
  {
    plinkos.push(new Plinko(j,175));
  }

    for (var j = 75; j <= width; j += 50)
  {
    plinkos.push(new Plinko(j,275));
  }

    for (var j = 50; j <= width-10; j += 50)
  {
    plinkos.push(new Plinko(j,375));
  }

  Matter.Events.on(engine, "collisionStart", function(event)
  {
    for (var i = 0; i < scorers.length; i++)
    {
      if (event.pairs[0].bodyA == scorers[i].body)
      {
        for (var j = 0; j < particles.length; j++)
        {
          if (event.pairs[0].bodyB == particles[j].body)
          {
            removeBodyFromArray(particles, j);
            score += scorers[i].value;
            break;
          }
        }
        break;
      }
    }
  });


  Engine.run(engine);  
}

function draw() {
  noStroke();
  background("black");

  fill("white");
  textSize(20);
  text("Score : " + score, 20, 30);

  for (var i = 0; i < plinkos.length; i++)
  {
    plinkos[i].display(); 
  }

  for (var j = 0; j < particles.length; j++)
  {
    var x = particles[j].body.position.x;
    var y = particles[j].body.position.y;

    if (x > width || x < 0 || y > height || y < 0)
    {
      removeBodyFromArray(particles, j);
      j--;
      continue;
    }
    particles[j].display();
  }
   
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  for (var l = 0; l < scorers.length; l++)
  {
    scorers[l].display();
  }
}

function mouseClicked()
{
  particles.push(new Particle(mouseX+random(-50, 50), 10, 10));
}

function removeBodyFromArray(array, index)
{
  World.remove(world, array[index].body);
  delete array[index];
  array.splice(index, 1);
}