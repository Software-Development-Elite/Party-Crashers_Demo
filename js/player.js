var player;
var player_img;

function playerPreload() {
    player_img = loadImage("../img/Player.png");
}

function player_setup() {
    player = createSprite(500,300,50,50);
    player.shapeColor = ("white");
    player.addImage(player_img);
    player.scale=(1.5)

}

function player_draw() {
    if(keyDown("w")) {
        player.y = player.y-5;
    }

    if(keyDown("a")) {
        player.x = player.x-5;
    }

    if(keyDown("s")) {
        player.y = player.y+5;
    }

    if(keyDown("d")) {
        player.x = player.x+5;
    }
}

console.log("player.js is working");
