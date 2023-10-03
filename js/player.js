var player;
var player_img;

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
    if(keyDown("w")) {
        player.y = player.y-5;
        playerP_state = YU;
    }

    if(keyDown("a")) {
        player.x = player.x-5;
        playerP_state = XL;
    }

    if(keyDown("s")) {
        player.y = player.y+5;
        playerP_state = YD;
    }

    if(keyDown("d")) {
        player.x = player.x+5;
        playerP_state = XR;
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
}

console.log("player.js is working");