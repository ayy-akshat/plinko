class Scorer
{
    constructor(x, y, w, h, value)
    {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.value = value;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(60);
        rect(pos.x, pos.y, this.w, this.h);
        fill(150);
        textAlign(CENTER);
        text(this.value, this.body.position.x, this.body.position.y - 50);
    }
}