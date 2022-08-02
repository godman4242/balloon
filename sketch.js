var bg,bgimg
var balloon,balloonimg
var top,down

function preload(){
  bgimg = loadImage('assets/bg.png')
  balloonimg = loadAnimation('assets/balloon1.png','assets/balloon2.png','assets/balloon3.png')
}

function setup(){
  bg = createSprite(165,485,1,1)
  bg.addImage(bgimg)
  bg.scale = 1.3

  bottom = createSprite(200,390,800,20)
bottom.visible = false

top = createSprite(200,10,800,20)
top.visible = false


balloon= createSprite(100,200,20,50)
balloon.addAnimation('balloon',balloonimg)
balloon.scale = 0.2
}

function draw(){
  background('black')
  if(keyDown('space')){
    balloon.velocityY = -10
  }
    if(keyDown('left')){
      balloon.velocityX = -10
  }
  balloon.velocityY = balloon.velocityY + 0.5
  drawSprites();

}