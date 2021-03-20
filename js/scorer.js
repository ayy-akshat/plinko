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
    }
}