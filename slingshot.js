class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:20
        }
        this.pointB=pointB;
    
        this.shot = Constraint.create(options)
        World.add(world,this.shot);
    }

    display(){
        if(this.shot.bodyA){
        strokeWeight(4);
        line (this.shot.bodyA.position.x,this.shot.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
    fly(){r
        this.shot.bodyA=null
    }
}
