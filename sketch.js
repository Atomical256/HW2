var runner,runner_running,path,path_going
function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png","Runner-1.png")
  path_going = loadImage("path.png")
}

function setup(){
  createCanvas(400,600);
  //create sprites here
  path= createSprite(200,200)
  path.addImage("path.png", path_going)
  path.velocityY = 4
  path.scale = 1.2
  runner= createSprite(300,500)
  
  runner.addAnimation("runner",runner_running)
  runner.scale = 0.08
}

function draw() {
  background(0);
  drawSprites()
  if(path.y>400){
    path.y= height/2
  }
  runner.x = World.mouseX
}
