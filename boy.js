class Boy
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.boyMango=Bodies.rectangle(x,y,width,height,option);
        this.image=loadImage("boy.png")
        World.add(world,this.boyMango);
        this.width=width;
        this.height=height;
    }

    display()
    {
        fill("blue");
        noStroke();
        imageMode(CENTER);
        image(this.image,this.boyMango.position.x,this.boyMango.position.y,this.width,this.height);
        this.image.scale=0.004

    }
}