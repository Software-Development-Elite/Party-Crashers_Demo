var player_img;
var player_idle1, player_idle2
var player_walk1, player_walk2, player_walk_up1, player_walk_up2, player_walk_down1, player_walk_down2;

var ghost_img_1, ghost_img_2, ghost_img_3;

var rocks_img, rock_img;

var slingShot1_img, slingShot2_img, slingShot3_img;

var level_1;

function preloader() {
    player_idle1 = loadAnimation("js/img/player/idle1/playerIdle00.png","js/img/player/idle1/playerIdle01.png","js/img/player/idle1/playerIdle02.png","js/img/player/idle1/playerIdle03.png","js/img/player/idle1/playerIdle04.png","js/img/player/idle1/playerIdle05.png","js/img/player/idle1/playerIdle06.png","js/img/player/idle1/playerIdle07.png","js/img/player/idle1/playerIdle08.png","js/img/player/idle1/playerIdle09.png","js/img/player/idle1/playerIdle10.png","js/img/player/idle1/playerIdle11.png",);
    player_idle2 = loadAnimation("js/img/player/idle2/playerIdle00.png","js/img/player/idle2/playerIdle01.png","js/img/player/idle2/playerIdle02.png","js/img/player/idle2/playerIdle03.png","js/img/player/idle2/playerIdle04.png","js/img/player/idle2/playerIdle05.png","js/img/player/idle2/playerIdle06.png","js/img/player/idle2/playerIdle07.png","js/img/player/idle2/playerIdle08.png","js/img/player/idle2/playerIdle09.png","js/img/player/idle2/playerIdle10.png","js/img/player/idle2/playerIdle11.png",);

    player_walk1 = loadAnimation("js/img/player/walk1/player_walk001.png", "js/img/player/walk1/player_walk1_01.png", "js/img/player/walk1/player_walk1_02.png", "js/img/player/walk1/player_walk1_03.png", "js/img/player/walk1/player_walk1_04.png", "js/img/player/walk1/player_walk1_05.png", "js/img/player/walk1/player_walk1_06.png", "js/img/player/walk1/player_walk1_07.png", "js/img/player/walk1/player_walk1_08.png", "js/img/player/walk1/player_walk1_09.png", "js/img/player/walk1/player_walk1_10.png", "js/img/player/walk1/player_walk1_11.png");
    player_walk2 = loadAnimation("js/img/player/walk2/player_walk001.png", "js/img/player/walk2/player_walk2_01.png", "js/img/player/walk2/player_walk2_02.png", "js/img/player/walk2/player_walk2_03.png", "js/img/player/walk2/player_walk2_04.png", "js/img/player/walk2/player_walk2_05.png", "js/img/player/walk2/player_walk2_06.png", "js/img/player/walk2/player_walk2_07.png", "js/img/player/walk2/player_walk2_08.png", "js/img/player/walk2/player_walk2_09.png", "js/img/player/walk2/player_walk2_10.png", "js/img/player/walk2/player_walk2_11.png");
    player_walk_up1 = loadAnimation("js/img/player/walk3/playerWalkUp00.png","js/img/player/walk3/playerWalkUp01.png","js/img/player/walk3/playerWalkUp02.png","js/img/player/walk3/playerWalkUp03.png","js/img/player/walk3/playerWalkUp04.png","js/img/player/walk3/playerWalkUp05.png","js/img/player/walk3/playerWalkUp05.png","js/img/player/walk3/playerWalkUp06.png","js/img/player/walk3/playerWalkUp07.png","js/img/player/walk3/playerWalkUp08.png","js/img/player/walk3/playerWalkUp09.png","js/img/player/walk3/playerWalkUp10.png","js/img/player/walk3/playerWalkUp11.png");
    player_walk_up2 = loadAnimation("js/img/player/walk4/playerWalkUp00.png","js/img/player/walk4/playerWalkUp01.png","js/img/player/walk4/playerWalkUp02.png","js/img/player/walk4/playerWalkUp03.png","js/img/player/walk4/playerWalkUp04.png","js/img/player/walk4/playerWalkUp05.png","js/img/player/walk4/playerWalkUp05.png","js/img/player/walk4/playerWalkUp06.png","js/img/player/walk4/playerWalkUp07.png","js/img/player/walk4/playerWalkUp08.png","js/img/player/walk4/playerWalkUp09.png","js/img/player/walk4/playerWalkUp10.png","js/img/player/walk4/playerWalkUp11.png");
    player_walk_down1 = loadAnimation("js/img/player/walk5/playerDown00.png","js/img/player/walk5/playerDown01.png","js/img/player/walk5/playerDown02.png","js/img/player/walk5/playerDown03.png","js/img/player/walk5/playerDown04.png","js/img/player/walk5/playerDown05.png","js/img/player/walk5/playerDown06.png","js/img/player/walk5/playerDown07.png","js/img/player/walk5/playerDown08.png","js/img/player/walk5/playerDown09.png","js/img/player/walk5/playerDown10.png","js/img/player/walk5/playerDown11.png");
    player_walk_down2 = loadAnimation("js/img/player/walk6/playerDown00.png","js/img/player/walk6/playerDown01.png","js/img/player/walk6/playerDown02.png","js/img/player/walk6/playerDown03.png","js/img/player/walk6/playerDown04.png","js/img/player/walk6/playerDown05.png","js/img/player/walk6/playerDown06.png","js/img/player/walk6/playerDown07.png","js/img/player/walk6/playerDown08.png","js/img/player/walk6/playerDown09.png","js/img/player/walk6/playerDown10.png","js/img/player/walk6/playerDown11.png");

    ghost_img_1 = loadImage("js/img/ghost1.png");
    ghost_img_2 = loadImage("js/img/ghost2.png");
    ghost_img_3 = loadImage("js/img/ghost3.png");

    rocks_img = loadImage("js/img/rocks.png");
    rock_img = loadImage("js/img/rock.png");

    slingShot1_img = loadImage("js/img/slingShot1.png");
    slingShot2_img = loadImage("js/img/slingShot2.png");
    slingShot3_img = loadImage("js/img/slingShot3.png");

    level_1 = loadImage("js/img/maps/level1.png")
}

function preloadSetup() {
    if(gameState === playState) {
        player.addAnimation("player1", player_walk1);
        player.addAnimation("player2", player_walk2);
        player.addAnimation("player_up1", player_walk_up1);
        player.addAnimation("player_up2", player_walk_up2);
        player.addAnimation("player_down1", player_walk_down1);
        player.addAnimation("player_down2", player_walk_down2);
        player.addAnimation("player_idle1", player_idle1);
        player.addAnimation("player_idle2", player_idle2);
        //player.scale=(5.0);

        enemy.addImage("ghost1", ghost_img_1);
        enemy2.addImage("ghost2", ghost_img_2);
        enemy3.addImage("ghost3", ghost_img_3);

        rock_pile.addImage("rocks", rocks_img);
        rock_pile2.addImage("rocks", rocks_img);
        rock_pile3.addImage("rocks", rocks_img);
        rock_pile4.addImage("rocks", rocks_img);
        rock_pile5.addImage("rocks", rocks_img);

        front_yard_map.addImage("level1", level_1);

        item.addImage("slingshot1", slingShot1_img);
        item.addImage("slingshot2", slingShot2_img);
        item.addImage("slingshot3", slingShot3_img);

        level2_sprite.addImage("slingShot2", slingShot2_img);
        level3_sprite.addImage("slingShot3", slingShot3_img);
    }
}

function preloadDraw() {
    console.log(slingShot_level);
    if(slingShot_level === 1) {
        item.changeImage("slingshot1");
        roundDamage = 1;
    }else if(slingShot_level === 2){
        item.changeImage("slingshot2");
        roundDamage = 2;
        can_get_level3 = true;
    }else if(slingShot_level === 3){
        item.changeImage("slingshot3");
        roundDamage = 4;
    }
}