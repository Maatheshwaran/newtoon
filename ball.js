class Ball {
    constructor(x,y) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius);
    }
  };