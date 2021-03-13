class Stone{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.r=50;
        var options={
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.stoneImg = loadImage("images/stone.png");
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.stoneImg,0,0,50,50);
        pop();
    }
}