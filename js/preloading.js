var player_img;
var player_walk1, player_walk2;

var ghost_img_1;

var rocks_img, rock_img;

function preloader() {
    player_img = loadAnimation("js/img/player.png");
    console.log("test");

    player_walk1 = loadAnimation("js/img/player/walk1/player_walk001.png", "js/img/player/walk1/player_walk1_01.png", "js/img/player/walk1/player_walk1_02.png", "js/img/player/walk1/player_walk1_03.png", "js/img/player/walk1/player_walk1_04.png", "js/img/player/walk1/player_walk1_05.png", "js/img/player/walk1/player_walk1_06.png", "js/img/player/walk1/player_walk1_07.png", "js/img/player/walk1/player_walk1_08.png", "js/img/player/walk1/player_walk1_09.png", "js/img/player/walk1/player_walk1_10.png", "js/img/player/walk1/player_walk1_11.png");
    player_walk2 = loadAnimation("js/img/player/walk2/player_walk001.png", "js/img/player/walk2/player_walk2_01.png", "js/img/player/walk2/player_walk2_02.png", "js/img/player/walk2/player_walk2_03.png", "js/img/player/walk2/player_walk2_04.png", "js/img/player/walk2/player_walk2_05.png", "js/img/player/walk2/player_walk2_06.png", "js/img/player/walk2/player_walk2_07.png", "js/img/player/walk2/player_walk2_08.png", "js/img/player/walk2/player_walk2_09.png", "js/img/player/walk2/player_walk2_10.png", "js/img/player/walk2/player_walk2_11.png");

    ghost_img_1 = loadImage("js/img/ghost1.png");

    rocks_img = loadImage("js/img/rocks.png");
    rock_img = loadImage("js/img/rock.png");
}

function preloadSetup() {
    if(gameState === playState) {
        player.addAnimation("player1", player_walk1);
        player.addAnimation("player2", player_walk2);
        //player.scale=(5.0);

        enemy.addImage("ghost1", ghost_img_1);

        rock_pile.addImage("rocks", rocks_img);
    }
}

function preloadDraw() {}