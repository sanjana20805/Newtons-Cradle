class Bob{
    constructor(x,y,colour){
        var options = {
            isStatic: true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,20,options)
        this.radius = 20

        this.colour = colour
        
       

        World.add(world, this.body);



    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        
        
        fill(this.colour);
        ellipse(0, 0, this.radius, this.radius);
        pop()
      }
    };

