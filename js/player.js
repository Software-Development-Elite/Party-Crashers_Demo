var player;
var player_img;

var previous_playerX = 0;
var previous_playerY = 0;

var walking = false;

var side = 1;
var left = 1;
var right = 2;

var playerP_state = 0;
var YU = 0;
var XR = 1;
var YD = 3;
var XL = 4;

function player_setup() {
    player = createSprite(200,300,50,50);
    player.setCollider("rectangle", 0, 0, 50, 50);
    player.shapeColor = ("white");

}

function player_draw() {
    camera.x = player.x;
    camera.y = player.y;

    if(frameCount % 2 === 0) {
        previous_playerX = player.x;
        previous_playerY = player.y;
        console.log(previous_playerX, previous_playerY);
    }

    if(side === left) {
        player.changeAnimation("player_idle2");
        player.animation.play();
    }else if(side === right) {
        player.changeAnimation("player_idle1");
        player.animation.play();
    }

    if(keyDown("w")) {
        player.y = player.y-5;
        playerP_state = YU;

        if(side === right) {
            player.changeAnimation("player_up1");
            player.animation.play();
        }else if(side === left) {
            player.changeAnimation("player_up2");
            player.animation.play();
        }
    }

    if(keyDown("a")) {
        player.x = player.x-5;
        playerP_state = XL;
        side = left;
        player.changeAnimation("player2");
        player.animation.play();
    }

    if(keyDown("s")) {
        player.y = player.y+5;
        playerP_state = YD;

        if(side === right) {
            player.changeAnimation("player_down1");
            player.animation.play();
        }else if(side === left) {
            player.changeAnimation("player_down2");
            player.animation.play();
        }
    }

    if(keyDown("d")) {
        player.x = player.x+5;
        playerP_state = XR;
        side = right;
        player.changeAnimation("player1");
        player.animation.play();
    }

    //player.animation.play();
}

console.log("player.js is working");