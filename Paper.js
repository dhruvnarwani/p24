class Paper {
constructor(x, y, diameter){
    var options= {
        isStatic : true,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Matter.Bodies.circle(x, y, diameter, options);
    World.add(world, this.body);
}
 display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);

    fill(255);
    stroke("blue");
    strokeWeight(4);
    
    pop();
}
}