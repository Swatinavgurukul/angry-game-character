class Bird{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        
    }

    show(){
        fill(200);
        circle(this.x,this.y,this.r);
    }
}