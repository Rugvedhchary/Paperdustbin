class Paper{
    constructor(x,y,r){
     var options = {
         isStatic : false,
         restitutuion : 0.3,
         friction : 0.5,
         density : 1.2
         
         
     }
        this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        
        this.images=loadImage("paper.png")


        World.add(world, this.body); 
        
    }
    display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			fill(128,128,128)
			image(this.images,0,0,this.r,this.r);
			pop()
			
	}

}