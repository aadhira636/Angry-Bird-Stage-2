class Slingshot 
{
        constructor(bodya,bodyb)
        {
            var options = 
            {
                     bodyA:bodya,
                     bodyB:bodyb,
                     length:10,
                     stiffness:0.4
            }
            this.sling = Matter.Constraint.create(options);
            World.add(world,this.sling);
        }
        display()
        {
                strokeWeight(5);
                line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
        }
}