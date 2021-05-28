class Snow {
    constructor(x,y){
        var options = {
            'friction': 1,
            'restitution': 0.3,
            'density': 1,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x,y,10,10, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow2.png");
        //this.image.scale = 0.2;

        World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    imageMode(CENTER);
    image(this.image, 0, 0, 200, 180);
    pop();
    }
}