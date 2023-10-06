var player_img;
var player_idle1, player_idle2
var player_walk1, player_walk2, player_walk_up1, player_walk_up2;

var ghost_img_1;

var rocks_img, rock_img;

function preloader() {
    player_idle1 = loadAnimation("js/img/player/idle1/playerIdle00.png","js/img/player/idle1/playerIdle01.png","js/img/player/idle1/playerIdle02.png","js/img/player/idle1/playerIdle03.png","js/img/player/idle1/playerIdle04.png","js/img/player/idle1/playerIdle05.png","js/img/player/idle1/playerIdle06.png","js/img/player/idle1/playerIdle07.png","js/img/player/idle1/playerIdle08.png","js/img/player/idle1/playerIdle09.png","js/img/player/idle1/playerIdle10.png","js/img/player/idle1/playerIdle11.png",);
    player_idle2 = loadAnimation("js/img/player/idle2/playerIdle00.png","js/img/player/idle2/playerIdle01.png","js/img/player/idle2/playerIdle02.png","js/img/player/idle2/playerIdle03.png","js/img/player/idle2/playerIdle04.png","js/img/player/idle2/playerIdle05.png","js/img/player/idle2/playerIdle06.png","js/img/player/idle2/playerIdle07.png","js/img/player/idle2/playerIdle08.png","js/img/player/idle2/playerIdle09.png","js/img/player/idle2/playerIdle10.png","js/img/player/idle2/playerIdle11.png",);

    player_walk1 = loadAnimation("js/img/player/walk1/player_walk001.png", "js/img/player/walk1/player_walk1_01.png", "js/img/player/walk1/player_walk1_02.png", "js/img/player/walk1/player_walk1_03.png", "js/img/player/walk1/player_walk1_04.png", "js/img/player/walk1/player_walk1_05.png", "js/img/player/walk1/player_walk1_06.png", "js/img/player/walk1/player_walk1_07.png", "js/img/player/walk1/player_walk1_08.png", "js/img/player/walk1/player_walk1_09.png", "js/img/player/walk1/player_walk1_10.png", "js/img/player/walk1/player_walk1_11.png");
    player_walk2 = loadAnimation("js/img/player/walk2/player_walk001.png", "js/img/player/walk2/player_walk2_01.png", "js/img/player/walk2/player_walk2_02.png", "js/img/player/walk2/player_walk2_03.png", "js/img/player/walk2/player_walk2_04.png", "js/img/player/walk2/player_walk2_05.png", "js/img/player/walk2/player_walk2_06.png", "js/img/player/walk2/player_walk2_07.png", "js/img/player/walk2/player_walk2_08.png", "js/img/player/walk2/player_walk2_09.png", "js/img/player/walk2/player_walk2_10.png", "js/img/player/walk2/player_walk2_11.png");
    player_walk_up1 = loadAnimation("js/img/player/walk3/playerWalkUp00.png","js/img/player/walk3/playerWalkUp01.png","js/img/player/walk3/playerWalkUp02.png","js/img/player/walk3/playerWalkUp03.png","js/img/player/walk3/playerWalkUp04.png","js/img/player/walk3/playerWalkUp05.png","js/img/player/walk3/playerWalkUp05.png","js/img/player/walk3/playerWalkUp06.png","js/img/player/walk3/playerWalkUp07.png","js/img/player/walk3/playerWalkUp08.png","js/img/player/walk3/playerWalkUp09.png","js/img/player/walk3/playerWalkUp10.png","js/img/player/walk3/playerWalkUp11.png");
    player_walk_up2 = loadAnimation("js/img/player/walk4/playerWalkUp00.png","js/img/player/walk4/playerWalkUp01.png","js/img/player/walk4/playerWalkUp02.png","js/img/player/walk4/playerWalkUp03.png","js/img/player/walk4/playerWalkUp04.png","js/img/player/walk4/playerWalkUp05.png","js/img/player/walk4/playerWalkUp05.png","js/img/player/walk4/playerWalkUp06.png","js/img/player/walk4/playerWalkUp07.png","js/img/player/walk4/playerWalkUp08.png","js/img/player/walk4/playerWalkUp09.png","js/img/player/walk4/playerWalkUp10.png","js/img/player/walk4/playerWalkUp11.png");

    ghost_img_1 = loadImage("js/img/ghost1.png");

    rocks_img = loadImage("js/img/rocks.png");
    rock_img = loadImage("js/img/rock.png");
}

function preloadSetup() {
    if(gameState === playState) {
        player.addAnimation("player1", player_walk1);
        player.addAnimation("player2", player_walk2);
        player.addAnimation("player_up1", player_walk_up1);
        player.addAnimation("player_up2", player_walk_up2);
        player.addAnimation("player_idle1", player_idle1);
        player.addAnimation("player_idle2", player_idle2);
        //player.scale=(5.0);

        enemy.addImage("ghost1", ghost_img_1);

        rock_pile.addImage("rocks", rocks_img);
    }
}

function preloadDraw() {}