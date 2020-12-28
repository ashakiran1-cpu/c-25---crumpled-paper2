class Paper{
    constructor(){
        this.body=Bodies.circle(70,350,20,{isStatic:false,restitution:0.3,density:1.2,friction:0.5});
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        fill("white")
        stroke("white")
        ellipse(this.body.position.x, this.body.position.y,20,20)
        image(this.image,this.body.position.x, this.body.position.y,50,50)
    }
}