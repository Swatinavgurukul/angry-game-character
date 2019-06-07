let ground;
let box;
// let bird;
function setup(){
    createCanvas(1000,500);
    
    fill(12);
    ground = new Ground(0,height-25,width,50);
    fill(3);
    // box = new Box(700,378,50,95);
    // box2 = new Box(600,378,50,95);
    // box3 = new Box(650,282,50,95);
    // bird = new Bird(50,300,75);
    // angry_bird = loadImage('download.png');
}
let angry_bird;


function draw(){
    background(200);
    // fill(130);
    ground.show();
    // box.show();
    // box2.show();
    // box3.show();
    // bird.show();
    image(angry_bird,40,375);
    var x = 700;
    var y = 375;
    for (var i = 0; i<3;i++)
        image(boxes,700,375)
}
function preload(){
    angry_bird = loadImage('dot.png');
    boxes = loadImage('equals.png')
}