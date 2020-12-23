class CrumpledPaper {
    constructor(x, y){
        var paperOptions = {
            isStatic : false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, 10, paperOptions);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    showBall(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 10);
    }
}