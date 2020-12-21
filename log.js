class Log extends BaseClass{
    constructor(x,y,width,height,angle){
        super(x,y,width,height);
        Matter.Body.setAngle(this.body,angle);
        this.image = loadImage("wood2.png");
    }

}