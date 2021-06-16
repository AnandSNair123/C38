var back,back_img;
var player,player_img;
var stone,stone_img,stoneGroup;
var rand;
var invis;
var distance = 0;

function preload(){
    back_img = loadImage("back.png");
    player_img = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
    stone_img = loadImage("stone.png");

}

function setup() {
    createCanvas(800,500);

    back = createSprite(350,250);
    back.addImage(back_img);
    back.scale = 1.2;
    back.velocityX = -6;

    player = createSprite(100,290);
    player.addAnimation("hi",player_img);
    player.scale = 1.7;

    invis = createSprite(player.x,player.y+100,10,10);
    invis.visible = false;

    stoneGroup = new Group();
 
}

function draw() {
    
 
 background("black");
 if(player.isTouching(stoneGroup)){
    player.x = 770;
    player.visible = false;
    invis.x = player.x;
    back.velocityX = 0;
    stoneGroup.destroyEach();
    stoneGroup.setVelocityXEach(0);
    stoneGroup.setLifetimeEach(-1);
    

    
}
//distance = Math.round(distance);

if(frameCount%10===0){


    var dis = 10;
    distance = distance+dis;
    console.log(distance);
}


player.velocityY = player.velocityY + 0.6;
player.collide(invis);
if(keyDown("space")&& player.y>300){
    player.velocityY = -14;
}

if(back.x<0){
    back.x = width/2;
}
//back.visible = false;

obstacle();

drawSprites();

textStyle(BOLD);
fill("white");
textSize(20);
text("Score : "+distance+"m",600,50);

}

function obstacle(){
    if(frameCount%160===0){
        rand = Math.round(random(750,900));
        stone = createSprite(rand,360);
        stone.addImage(stone_img);
        stone.velocityX = -6;
        stone.scale = 0.9;
        stone.lifetime = 140
stoneGroup.add(stone);

    }
    if(player.isTouching(stoneGroup)){
        stoneGroup.visible = false;
    }
}