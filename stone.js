class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("NicePng_the-rock-png_721068.png");
     
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
  
      super.display();
  
      
    }
  }
  
  