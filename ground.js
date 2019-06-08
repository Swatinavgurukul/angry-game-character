class Ground{
    constructor(x,y,width,heigh){
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigh=heigh;
    }

    show(){
        fill(20);
        rect(this.x,this.y,this.width,this.heigh);
    }
}