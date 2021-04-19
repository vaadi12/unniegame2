class rec2 {
  constructor(x, y) {
    var options = {
      'density':12,
      'friction': 0.9,
      'restitution':0.8
    };
    this.body = Bodies.rectangle(x, y, 150, 50, options);
    this.width = 150;
    this.height = 50;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('black')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
