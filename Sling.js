class Sling{
    constructor(bodyA,pointB){
        this.pointB=pointB;
        var op={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }
       
        this.sling = Matter.Constraint.create(op);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
      }
      attach(body){
          this.sling.bodyA=body;
      }
    display(){
        if(this.sling.bodyA){
            strokeWeight(2);
           line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}