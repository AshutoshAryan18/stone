class Tree {
    constructor(x,y){
        var object={
            restitution:1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,30,object);
        this.width=20;
        this.height=30;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        fill("red");
        image(this.image,0,0,300,450);
        pop ()
    
    }
    }