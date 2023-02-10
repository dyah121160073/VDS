function setup() {
    createCanvas(400,400)
    background(102,178,255)

    x1 = 20;
    y1 = 250;

    x2 = 240;
    y2 = 37;

    x = 199;
    y = 199;

    rectWidth = 75;
    rectHeight = 50;

}

function draw() {
    line(x1,y1,x2,y2)

    rect(x - rectWidth/2,y - rectHeight/2, rectWidth, rectHeight)
    ellipse(x,y, rectWidth, rectHeight)


}