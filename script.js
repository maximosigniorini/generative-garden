let angle = 0;
let grow = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angle = random(0, TWO_PI)
}

function draw() {
    clear()
    stroke(255);
    translate(width/2, height);
    branch(200);

    if(grow < 0.7){
        grow+= 0.0001
    }
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * grow);
        pop();
        push();
        rotate(-angle);
        branch(len * grow);
        pop();
    }
}