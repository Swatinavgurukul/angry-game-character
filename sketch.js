let ground;
let box;
let bachground;
function preload(){
    box = loadImage('image/equals.png')
    small_angry_bird = loadImage('image/small_bird.png');
    small_pig = loadImage('image/small_pig.png')
    big_pig = loadImage('image/big_pig.png')
    bachground = loadImage('image/background.jpg')
    sling1=loadImage('image/sling1.png')
    sling2=loadImage('image/sling2.png')
}
function setup(){
    createCanvas(1000,500);
    ground = new Ground(0,height-25,width,50);
    big_angry_bird = loadImage('image/big_bird.png');
}
function draw(){
    stroke(0);
    background(bachground);
    
    ground.show();
    
    image(big_angry_bird,mouseX, mouseY,50,55);
    
    image(sling1,80,279)
    image(sling2,52,270)
    image(small_angry_bird,627,420)
    
    
    image(big_pig,610,178);
    
    image(box,670,375);
    image(box,565,375);
    image(box,615,275);
    
    image(small_pig,565,330);
    image(small_pig,705,330);

    image(small_pig,870,385);
}