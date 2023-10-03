var player_img;
var player_walk1, player_walk2;

function preloader() {
    player_img = loadImage("img/player.png");

    player_walk1 = loadAnimation("img/player/walk.gif");
    player_walk2 = loadAnimation("img/player/walk2.gif");
}

function preloadSetup() {
    if(gameState === playState) {
        player.addImage("idle", player_img);
        player.scale=(10.0);
    }
}
