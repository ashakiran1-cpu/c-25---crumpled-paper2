class Dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        fill("white")
        stroke("white")
        rect(this.body.position.x, this.body.position.y,this.width,this.height)
        image(this.image,790,200,120,150)
    }
}