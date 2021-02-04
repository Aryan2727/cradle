class Ball{

    constructor(x,y,r){

        var options = {

            isStatic : false,
            restitution : 0.4,
            gravity : 0.4,
            density : 1.2

        }

        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)

    }
        display(){

            var ballPosition = this.body.position;

            push()
            translate(ballPosition.x,ballPosition.y)
            rectMode(CENTER)
            fill("white")
            ellipse(0,0,this.r,this.r)
            pop()
        }
    }
   