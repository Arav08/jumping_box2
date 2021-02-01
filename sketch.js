var canvas;
var music;
var box1, box2, box3, box4
var square

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(125, 550, 150, 30)
    box1.shapeColor = "yellow"

    box2 = createSprite(300, 550, 150, 30)
    box2.shapeColor = "red"

    box3 = createSprite(475, 550, 150, 30)
    box3.shapeColor = "blue"

    box4 = createSprite(650, 550, 150, 30)
    box4.shapeColor = "green"

    square = createSprite(random(20, 750), 25, 30, 30)
    square.shapeColor = "white"

    edge1 = createSprite(800, 600, 0, 0)
    edge1.shapeColor = "black"
 
    square.velocityY = 3
    square.velocityX = 5

}

function draw() {
    background("black");
    // music.play()

    if (box1.isTouching(square) && square.bounceOff(box1)) {
        square.shapeColor = box1.shapeColor
        
        music.play()
    }

    if (box2.isTouching(square) && square.bounceOff(box2)) {
        square.shapeColor = box2.shapeColor

        square.velocityY = 0
        square.velocityX = 0

        music.stop()
    }

    if (box3.isTouching(square) && square.bounceOff(box3)) {
        square.shapeColor = box3.shapeColor
    }

    if (box4.isTouching(square) && square.bounceOff(box4)) {
        square.shapeColor = box4.shapeColor
    }

    edges = createEdgeSprites()

    square.bounceOff(edges)

    drawSprites()
}
