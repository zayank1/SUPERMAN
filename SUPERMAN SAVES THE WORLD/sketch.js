var laserbeam, superman;
var laserbeam1Img,laserbeam2Img, supermanImg, supermanflyImg, superman2Img
var superman3Img,laser1,laser2,laser3,laser4,laser5,laser6, laser7, laser8, laser9
var laser10, laser11, laser12
var laserImg,laser2Img,laser3Img,laser4Img,laser5Img, laser6Img, laser7Img

function preload(){
laserbeam1Img = loadImage("laserbeam.png")
laserbeam2Img = loadImage("laserbeam2.png")
supermanImg = loadImage("supermanstanding.png")
supermanflyImg = loadImage("superman.png")
superman2Img = loadImage("superman2.png")
superman3Img = loadImage("superman3.png")
laserImg = loadImage("laser.png")
laser2Img = loadImage("laser2.png")
laser3Img = loadImage("laser3.png")
laser4Img = loadImage("laser4.png")
laser5Img = loadImage("laser5.png")
laser6Img = loadImage("laser6.png")
laser7Img = loadImage("laser7.png")
}

function setup() {
  createCanvas(1600,800);
  
  superman = createSprite(80,680,20,20)
superman.addImage(supermanImg)
superman.scale = 0.2
superman.debug = true
superman.setCollider("rectangle",0,0,200,200)

laser1 = createSprite(200,600,10,200)
laser1.addImage(laser2Img)
laser1.scale = 1.3
laser1.debug = true
laser1.setCollider("rectangle",0,0,30,330)


laser2 = createSprite(200,200,10,200)
laser2.addImage(laserImg)
laser2.scale = 1.3
laser2.debug = true



laser3 = createSprite(400,200,10,200)
laser3.addImage(laser2Img)
laser3.scale = 1.3
laser3.debug = true
laser3.setCollider("rectangle",0,0,30,330)

laser4 = createSprite(400,650,10,200)
laser4.addImage(laser4Img)
laser4.scale = 1.5
laser4.debug = true
laser4.setCollider("rectangle",0,0,30,330)

laser5 = createSprite(610,280,10,200)
laser5.addImage(laser5Img)
laser5.scale = 1.3
laser5.debug = true
laser5.setCollider("rectangle",0,0,30,330)

laser6 = createSprite(810,210,10,200)
laser6.addImage(laser6Img)
laser6.scale = 1.3
laser6.debug = true
laser6.setCollider("rectangle",0,0,30,330)

laser7 = createSprite(1000,490,10,200)
laser7.addImage(laser7Img)
laser7.scale = 1
laser7.debug = true
laser7.setCollider("rectangle",0,0,30,330)

laser8 = createSprite(1000,300,10,200)
laser8.addImage(laser4Img)
laser8.scale = 0.3
laser8.debug = true
laser8.setCollider("rectangle",0,0,30,330)

laser9 = createSprite(1160,375,10,200)
laser9.addImage(laser6Img)
laser9.scale = 1.1
laser9.debug = true
laser9.setCollider("rectangle",0,0,30,330)

laser10 = createSprite(1500,200,10,200)
laser10.addImage(laser4Img)
laser10.scale = 1.3
laser10.debug = true
laser10.setCollider("rectangle",0,0,30,330)

laser11 = createSprite(1440,415,10,200)
laser11.addImage(laser3Img)
laser11.scale = 0.7
laser11.debug = true
laser11.setCollider("rectangle",0,0,30,330)

laser12 = createSprite(1440,580,10,200)
laser12.addImage(laser4Img)
laser12.scale = 0.8
laser12.debug = true
laser12.setCollider("rectangle",0,0,30,330)


}

function draw() {
  background("blue");  
  drawSprites();
  handlePlayerControls()
  handlePlayerLaserCollision()
if(superman.isTouching(laser2)){
  reset()
}


}

function handlePlayerControls(){
if(keyDown("up")){
  superman.y-=5
  superman.addImage(supermanflyImg)
  superman.scale = 0.3
}

if(keyDown("left")){
  superman.x-=5
  superman.addImage(superman2Img)
  superman.scale = 0.3
}
  if(keyDown("right")){
    superman.x+=5
    superman.addImage(supermanflyImg)
    superman.scale = 0.3
  }
if(keyDown("down")){
  superman.y+=5
  superman.addImage(superman3Img)
  superman.scale = 0.3
}


}

function handlePlayerLaserCollision(){
//if(superman){
//  reset()
//}

}

function reset(){
  superman.x = 80
  superman.y = 680
}


