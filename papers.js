class papers
{
    constructor(x,y)
    {
        var options = {
            isStatic:false,
			'density':1.2,
			'friction': 1,
			'restitution':0.3
      } //da thingys
        this.x=x;
        this.y=y;
        this.r=30;
        this.image = loadImage("paper.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);

    }
    display(){
        var rubberpos=this.body.position;	
        push()
        translate(rubberpos.x, rubberpos.y);
        ellipseMode(RADIUS)
        fill(255)
        ellipse(0, 0,this.r);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop()
    }
} 

    
        
    