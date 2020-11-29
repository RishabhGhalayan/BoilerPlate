class Paper{
    constructor(x , y, diameter){
        var options={
            isStatic:false,
            friction:2,
            rescitution:0.5,
            density:1.2
        }
    this.body=Bodies.circle(x,y,diameter/2,options)
    this.diameter=diameter
    World.add(world,this.body);
    

    
    
    }
    
    display(){
        var pos=this.body.position
        var  angle=this.body.angle
        push()
        stroke("green")
        circle(this.body.position.x,this.body.position.y,this.diameter);
        pop()
    }
    
    }