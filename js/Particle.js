class Particle {
    constructor(x, y,r) {

        var options =
        {
            restitution:1
        };

        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(60, 255), random(60, 255), random(60, 255));
        World.add(world, this.body);

        Matter.Body.setVelocity(this.body, {x: random(-6, 6), y:0});

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};