var titleScreen;
var player_img;
var player_idle1, player_idle2
var player_walk1, player_walk2, player_walk_up1, player_walk_up2, player_walk_down1, player_walk_down2;

var ghost_img_1, ghost_img_2, ghost_img_3;
var ghost_moving;
var space_ghost;
var noFace1, noFace2;

var rocks_img, rock_img;
var cup_img;

var stream1_img, stream2_img, stream3_img, stream4_img, stream5_img, stream6_img, stream7_img, stream8_img, stream9_img, stream10_img, stream11_img, stream12_img, stream13_img, stream14_img, stream15_img, stream16_img, stream17_img, stream18_img;

var slingShot1_img, slingShot2_img, slingShot3_img;
var waterTool1_img, waterTool2_img, waterTool3_img;
var nothing1_img, nothing2_img, nothing3_img;

var npcSprite_1, npcSprite_2;
var kitchen_decor1, kitchen_decor2, kitchen_decor3;

var pumpkinImg = [0,0,0];

var level_0, level_1, level_2;

var michael_idle, michael_walk1, michael_walk2, michael_walk3, michael_walk3, michael_walk4, michael_windup1, michael_windup2, michael_w_still1, michael_w_still2, michael_attack_left, michael_attack_right, michael_sweep_right, michael_sweep_left;

var bossMusic;

function preloader() {
    titleScreen = loadImage("js/img/titlescreen.png")
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

    space_ghost = loadImage("js/img/costume_party/reference.png");

    noFace1 = loadImage("js/img/costume_party/bestFilm1.png");
    noFace2 = loadImage("js/img/costume_party/bestFilm2.png")

    ghost_moving = loadAnimation("js/img/ghosts/ghost1/ghost1.png", "js/img/ghosts/ghost1/ghost2.png", "js/img/ghosts/ghost1/ghost3.png", "js/img/ghosts/ghost1/ghost4.png", "js/img/ghosts/ghost1/ghost5.png", "js/img/ghosts/ghost1/ghost6.png", "js/img/ghosts/ghost1/ghost7.png", "js/img/ghosts/ghost1/ghost8.png", "js/img/ghosts/ghost1/ghost9.png")

    rocks_img = loadImage("js/img/rocks.png");
    rock_img = loadImage("js/img/rock.png");

    cup_img = loadImage("js/img/cup.png");

    stream1_img = loadImage("js/img/water/water_0.png");
    stream2_img = loadImage("js/img/water/water_1.png");
    stream3_img = loadImage("js/img/water/water_2.png");
    stream4_img = loadImage("js/img/water/water_3.png");
    stream5_img = loadImage("js/img/water/water_4.png");
    stream6_img = loadImage("js/img/water/water_5.png");

    stream7_img = loadImage("js/img/water/water_6.png");
    stream8_img = loadImage("js/img/water/water_7.png");
    stream9_img = loadImage("js/img/water/water_8.png");
    stream10_img = loadImage("js/img/water/water_9.png");
    stream11_img = loadImage("js/img/water/water_10.png");
    stream12_img = loadImage("js/img/water/water_11.png");

    stream13_img = loadImage("js/img/water/water_12.png");
    stream14_img = loadImage("js/img/water/water_13.png");
    stream15_img = loadImage("js/img/water/water_14.png");
    stream16_img = loadImage("js/img/water/water_15.png");
    stream17_img = loadImage("js/img/water/water_16.png");
    stream18_img = loadImage("js/img/water/water_17.png");

    slingShot1_img = loadImage("js/img/slingShot1.png");
    slingShot2_img = loadImage("js/img/slingShot2.png");
    slingShot3_img = loadImage("js/img/slingShot3.png");

    waterTool1_img = loadImage("js/img/watersoaker.png");
    waterTool2_img = loadImage("js/img/cidersoaker.png");
    waterTool3_img = loadImage("js/img/lavasoaker.png");

    nothing1_img = loadImage("js/img/nothing/nothing0.png");
    nothing2_img = loadImage("js/img/nothing/nothing1.png");
    nothing3_img = loadImage("js/img/nothing/nothing2.png");

    level_0 = loadImage("js/img/maps/level0.png");
    level_1 = loadImage("js/img/maps/level1.png");
    level_2 = loadImage("js/img/maps/level2.png");

    npcSprite_1 = loadImage("js/img/costume_party/worst_font.png");
    npcSprite_2 = loadImage("js/img/costume_party/noor.png");

    kitchen_decor1 = loadImage("js/img/decor/kitchen/sprite_3.png");
    kitchen_decor2 = loadImage("js/img/decor/kitchen/sprite_0.png");
    kitchen_decor3 = loadImage("js/img/decor/kitchen/sprite_1.png");

    pumpkinImg[0] = loadImage("js/img/decor/sprite_07.png");
    pumpkinImg[1] = loadImage("js/img/decor/sprite_08.png");
    pumpkinImg[2] = loadImage("js/img/decor/sprite_09.png");

    michael_idle = loadAnimation("js/img/Brosky/idle/broskyidle00.png", "js/img/Brosky/idle/broskyidle01.png", "js/img/Brosky/idle/broskyidle02.png", "js/img/Brosky/idle/broskyidle03.png", "js/img/Brosky/idle/broskyidle04.png", "js/img/Brosky/idle/broskyidle05.png", "js/img/Brosky/idle/broskyidle06.png", "js/img/Brosky/idle/broskyidle07.png", "js/img/Brosky/idle/broskyidle08.png", "js/img/Brosky/idle/broskyidle09.png", "js/img/Brosky/idle/broskyidle10.png", "js/img/Brosky/idle/broskyidle11.png", "js/img/Brosky/idle/broskyidle12.png", "js/img/Brosky/idle/broskyidle13.png", "js/img/Brosky/idle/broskyidle14.png", "js/img/Brosky/idle/broskyidle16.png", "js/img/Brosky/idle/broskyidle17.png", "js/img/Brosky/idle/broskyidle18.png", "js/img/Brosky/idle/broskyidle19.png");
    michael_walk1 = loadAnimation("js/img/Brosky/walk_1/broskywalkforward0.png", "js/img/Brosky/walk_1/broskywalkforward1.png", "js/img/Brosky/walk_1/broskywalkforward2.png", "js/img/Brosky/walk_1/broskywalkforward3.png", "js/img/Brosky/walk_1/broskywalkforward4.png");
    michael_walk2 = loadAnimation("js/img/Brosky/walk_2/broskywalkforward0.png", "js/img/Brosky/walk_2/broskywalkforward1.png", "js/img/Brosky/walk_2/broskywalkforward2.png", "js/img/Brosky/walk_2/broskywalkforward3.png", "js/img/Brosky/walk_2/broskywalkforward4.png");
    michael_walk3 = loadAnimation("js/img/Brosky/walk_3/BroskyWalkUp0.png", "js/img/Brosky/walk_3/BroskyWalkUp1.png", "js/img/Brosky/walk_3/BroskyWalkUp2.png", "js/img/Brosky/walk_3/BroskyWalkUp3.png", "js/img/Brosky/walk_3/BroskyWalkUp4.png", "js/img/Brosky/walk_3/BroskyWalkUp5.png", "js/img/Brosky/walk_3/BroskyWalkUp6.png", "js/img/Brosky/walk_3/BroskyWalkUp7.png");
    michael_walk4 = loadAnimation("js/img/Brosky/walk_4/BroskyWalkDown0.png", "js/img/Brosky/walk_4/BroskyWalkDown1.png", "js/img/Brosky/walk_4/BroskyWalkDown2.png", "js/img/Brosky/walk_4/BroskyWalkDown3.png", "js/img/Brosky/walk_4/BroskyWalkDown4.png", "js/img/Brosky/walk_4/BroskyWalkDown5.png", "js/img/Brosky/walk_4/BroskyWalkDown6.png", "js/img/Brosky/walk_4/BroskyWalkDown7.png")
    michael_windup1 = loadAnimation("js/img/Brosky/windup1/windup1_0.png", "js/img/Brosky/windup1/windup1_1.png", "js/img/Brosky/windup1/windup1_2.png");
    michael_windup2 = loadAnimation("js/img/Brosky/windup2/windup2_0.png", "js/img/Brosky/windup2/windup2_1.png", "js/img/Brosky/windup2/windup2_2.png");
    michael_attack_left = loadAnimation("js/img/Brosky/yoyo1/yoyo1_00.png", "js/img/Brosky/yoyo1/yoyo1_01.png", "js/img/Brosky/yoyo1/yoyo1_02.png", "js/img/Brosky/yoyo1/yoyo1_03.png", "js/img/Brosky/yoyo1/yoyo1_04.png", "js/img/Brosky/yoyo1/yoyo1_05.png", "js/img/Brosky/yoyo1/yoyo1_06.png", "js/img/Brosky/yoyo1/yoyo1_07.png", "js/img/Brosky/yoyo1/yoyo1_08.png", "js/img/Brosky/yoyo1/yoyo1_09.png", "js/img/Brosky/yoyo1/yoyo1_10.png");
    michael_attack_right = loadAnimation("js/img/Brosky/yoyo1/yoyo1_00.png", "js/img/Brosky/yoyo1/yoyo1_01.png", "js/img/Brosky/yoyo1/yoyo1_02.png", "js/img/Brosky/yoyo1/yoyo1_03.png", "js/img/Brosky/yoyo1/yoyo1_04.png", "js/img/Brosky/yoyo1/yoyo1_05.png", "js/img/Brosky/yoyo1/yoyo1_06.png", "js/img/Brosky/yoyo1/yoyo1_07.png", "js/img/Brosky/yoyo1/yoyo1_08.png", "js/img/Brosky/yoyo1/yoyo1_09.png", "js/img/Brosky/yoyo1/yoyo1_10.png");
    michael_sweep_left = loadAnimation("js/img/Brosky/upKick1/upKick1_0.png", "js/img/Brosky/upKick1/upKick1_1.png", "js/img/Brosky/upKick1/upKick1_2.png", "js/img/Brosky/upKick1/upKick1_3.png", "js/img/Brosky/upKick1/upKick1_4.png", "js/img/Brosky/upKick1/upKick1_5.png", "js/img/Brosky/upKick1/upKick1_6.png", "js/img/Brosky/upKick1/upKick1_7.png", "js/img/Brosky/upKick1/upKick1_8.png", "js/img/Brosky/upKick1/upKick1_9.png");      
    michael_sweep_right = loadAnimation("js/img/Brosky/upKick2/upKick2_00.png", "js/img/Brosky/upKick2/upKick2_01.png", "js/img/Brosky/upKick2/upKick2_02.png", "js/img/Brosky/upKick2/upKick2_03.png", "js/img/Brosky/upKick2/upKick2_04.png", "js/img/Brosky/upKick2/upKick2_05.png", "js/img/Brosky/upKick2/upKick2_06.png", "js/img/Brosky/upKick2/upKick2_07.png", "js/img/Brosky/upKick2/upKick2_08.png", "js/img/Brosky/upKick2/upKick2_09.png");
    michael_w_still1 = loadImage("js/img/Brosky/windup1/windup1_2.png");
    michael_w_still2 = loadImage("js/img/Brosky/windup2/windup2_2.png");

    bossMusic = loadSound("js/music/Boss.mp3");
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
       //enemy.addAnimation("ghost1", ghost_moving);
        enemy2.addImage("ghost2", ghost_img_2);
        enemy3.addImage("ghost3", ghost_img_3);

        rock_pile.addImage("rocks", rocks_img);
        rock_pile2.addImage("rocks", rocks_img);
        rock_pile3.addImage("rocks", rocks_img);
        rock_pile4.addImage("rocks", rocks_img);
        rock_pile5.addImage("rocks", rocks_img);

        if(sceneState === 1) {
            console.log("Level 1");
            front_yard_map.addImage("level0", level_0);
        }else if(sceneState === 2) {
            console.log("Level 2");
            first_floor_map.addImage("level1", level_1);
        }else if(sceneState === 3) {
            console.log("Level 3");
            second_floor_map.addImage("level2", level_2);
        }

        item.addImage("slingshot1", slingShot1_img);
        item.addImage("slingshot2", slingShot2_img);
        item.addImage("slingshot3", slingShot3_img); 
        item.addImage("waterblaster1", waterTool1_img);
        item.addImage("waterblaster2", waterTool2_img);
        item.addImage("waterblaster3", waterTool3_img);

        level2_sprite.addImage("slingShot2", slingShot2_img);
        level3_sprite.addImage("slingShot3", slingShot3_img);

        wt_level1_sprite.addImage("waterblaster1", waterTool1_img);
        wt_level2_sprite.addImage("waterblaster1", waterTool2_img);
        wt_level3_sprite.addImage("waterblaster1", waterTool3_img);

        worstfont.addImage("sans", npcSprite_1);

        if(sceneState === 1) {
            pumpkins[0].addImage("pumpkin1", pumpkinImg[0]);
            pumpkins[1].addImage("pumpkin2", pumpkinImg[1]);
            pumpkins[2].addImage("pumpkin3", pumpkinImg[2]);
        }
        
        if(sceneState === 2) {
            noor.addImage("Morshu", npcSprite_2);
            enemy4.addImage("Space Ghost", space_ghost);
            enemy5.addImage("no face 1", noFace1);
            enemy5.addImage("no face 2", noFace2);
            kitchen1.addImage("kitchenDecor", kitchen_decor1);
            kitchen2.addImage("kitchenDecor", kitchen_decor2);
            kitchen3.addImage("kitchenDecor", kitchen_decor3);

            cup[0].addImage("cup", cup_img);
            cup[1].addImage("cup", cup_img);
            cup[2].addImage("cup", cup_img);
        }

        if(sceneState === level3) {
            bossMusic.loop();
            michael.addAnimation("idle", michael_idle);
            michael.addAnimation("walk1", michael_walk1);
            michael.addAnimation("walk2", michael_walk2);
            michael.addAnimation("walk3", michael_walk3);
            michael.addAnimation("walk4", michael_walk4);
            michael.addAnimation("windup1", michael_windup1);
            michael.addAnimation("windup2", michael_windup2);
            michael.addAnimation("left attack", michael_attack_left);
            michael.addAnimation("right attack", michael_attack_right);
            michael.addAnimation("left windup", michael_sweep_left);
            michael.addAnimation("right windup", michael_sweep_right);
            michael.addImage("windup_still1", michael_w_still1);
            michael.addImage("windup_still2", michael_w_still2);
        }
    }
}

function preloadDraw() {
    console.log(slingShot_level);

    if(tool_type === "Sling Shot") {
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
            can_get_waterTool = true;
        }
    }
    if(can_get_waterTool === true) {
        wt_can_get_level1 = true;
        if(waterTool_level === 1) {
            tool_type = "Water Blaster";
            item.changeImage("waterblaster1");
            roundDamage = 8;
        }else if(waterTool_level === 2) {
            item.changeImage("waterblaster2");
            roundDamage = 16;
        }else if(waterTool_level === 3) {
            item.changeImage("waterblaster3");
            roundDamage = 32;
        }
    }

    // if(sceneState === 3) {
    //     if(michaelState === idle) {
    //         michael.changeAnimation("idle");
    //     }else if(michaelState === walking) {
    //         if(michaelPosition === michaelYD) {
    //             michael.changeAnimation("walk4");
    //         }else if(michaelPosition === michaelYU) {
    //             michael.changeAnimation("walk3");
    //         }else if(michaelPosition === michaelXL) {
    //             michael.changeAnimation("walk1");
    //         }else if(michaelPosition === michaelXR) {
    //             michael.changeAnimation("walk2");
    //         }
    //     }
    // }
}