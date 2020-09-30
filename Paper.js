class Paper extends BaseClass {
  constructor(x,y,radius){
  
    super(x,y,radius,radius);
    this.image = loadImage("sprites/paper.png");
    this.radius = radius;
  }
  display() {    
    super.display();
  }
}
