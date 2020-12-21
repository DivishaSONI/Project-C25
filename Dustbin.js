class Dustbin{
    constructor(x,y,width,height){
        var options= {
            isStatic:true
        }
       this.body =Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
   this.image=loadImage("images/dustbingreen.png");
       World.add(world,this.body);
       
    }
    
    
    display() {
    var pos= this.body.position;
    push();
    rectMode(CENTER);
     strokeWeight(4);
    imageMode (CENTER);
    image (this.image,650,650,this.width,this.height);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
    };
    
    