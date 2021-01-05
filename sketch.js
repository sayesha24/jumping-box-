var canvas;
var music;
var surface1; 
var surface2; 
var surface3, surface4; 
var box; 
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces

surface1= createSprite(70, 590, 140, 30);
surface2= createSprite(226, 590, 155, 30);
surface3= createSprite(395, 590, 165, 30);
surface4= createSprite(570, 590, 170, 30);

surface1.shapeColor= "blue"; 
surface2.shapeColor= "red";
surface3.shapeColor= "green";
surface4.shapeColor= "yellow";

box= createSprite(random(20, 750));
box.shapeColor= "white";
box.width= 40;
box.height= 40; 
box.velocityY= 3; 
box.velocityX= 3; 


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    
    box.bounceOff(edges); 

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
  
        box.shapeColor= "blue";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){

        box.shapeColor= "red";
        music.loop(); 
       
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){

        box.shapeColor= "green";
        box.velocityX= 0; 
        box.velocityY= 0; 
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){

        box.shapeColor= "yellow";
    }
drawSprites();

}


