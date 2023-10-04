var player;
var player_img;

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
    player.shapeColor = ("white");

}

function player_draw() {
    player.animation.stop();

    if(keyDown("w")) {
        player.y = player.y-5;
        playerP_state = YU;
    }

    if(keyDown("a")) {
        player.x = player.x-5;
        playerP_state = XL;
        player.changeAnimation("player2")
        player.animation.play();
    }

    if(keyDown("s")) {
        player.y = player.y+5;
        playerP_state = YD;
    }

    if(keyDown("d")) {
        player.x = player.x+5;
        playerP_state = XR;
        player.changeAnimation("player1");
        player.animation.play();
    }

    if(keyDown("up_arrow")) {
        playerP_state = YU;
    }

    if(keyDown("left_arrow")) {
        playerP_state = XL;
    }

    if(keyDown("down_arrow")) {
        playerP_state = YD;
    }

    if(keyDown("right_arrow")) {
        playerP_state = XR;
    }

    //player.animation.play();
}

console.log("player.js is working");