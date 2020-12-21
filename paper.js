class paper{
    constructor(x,y){
        var options= {
            isStatic:false,
            restitution:0.7,
            density:1.3,
            friction:0.5
        }
       this.body =Bodies.rectangle(x,y,50,50,options);
       this.width= 50;
       this.height= 50;
     this.image=loadImage("images/paper.png")
       World.add(world,this.body);
       
    }
    
    
    display() {
    var pos= this.body.position;
    pop();
    push();
    rectMode(CENTER);
    fill ("white");
    imageMode (CENTER);
    image ( this.image,100,600,this.width,this.height);
    ellipse(pos.x,pos.y,70,70);
    
    }
    };
    
    