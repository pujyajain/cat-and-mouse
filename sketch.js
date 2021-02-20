var cat,mouse,garden
var catImg,catImg2,catImg3,mouseImg,gardenImg
function preload(){
 catImg = loadImage("cat1.png");
 catImg2=loadAnimation("cat2.png,cat3.png")
 catImg3 = loadImage("cat4.png")
 gardenImg = loadImage("garden.png")
 mouseImg = loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png")
}


function setup() {
    createCanvas(1200,800);
    cat=createSprite(100, 700, 50, 50)
    cat.addImage ("cat",catImg );
    cat.scale=1;
    mouse = creaateSprite(50,150,50,50)
    garden=createSprite(width/2,200)
    garden.addImage("garden",gardenImg)
  }
  
  function draw() {
    background(255,255,255);  
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
      cat.addAnimation("catLastImage",catImg3)
      cat.changeAnimation("catLastImage")
    }
    text(mouseX + ',' + mouseY ,10,45 )
    keyPressed ()
    drawSprites();
  }

  function keyPressed () {
    if(keyCode === LEFT_ARROW){
      cat.velocitiyX =
      cat.addAnimation("catRunning",catImg2)
      cat.changeAnimation("catRunning")
    }
    
  }


  