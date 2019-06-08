let ground;
let angry_bird;
let box;
let bachground;
// float x;

function preload(){
    angry_bird = loadImage('image/dot.png');
    box = loadImage('image/equals.png')
    bachground = loadImage('image/skyBackground.png')
}

function setup(){
    createCanvas(1000,500);
    ground = new Ground(0,height-25,width,50);
}

function draw(){
    background(bachground);
    
    ground.show();
    image(angry_bird,mouseX, mouseY,50,55);
    image(box,700,375);
    image(box,700,275);
    image(box,700,175);
    
}