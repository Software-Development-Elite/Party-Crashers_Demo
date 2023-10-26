var player_img;
var player_idle1, player_idle2
var player_walk1, player_walk2, player_walk_up1, player_walk_up2, player_walk_down1, player_walk_down2;

var ghost_img_1, ghost_img_2, ghost_img_3;
var ghost_moving;

var rocks_img, rock_img;

var stream1_img, stream2_img, stream3_img, stream4_img, stream5_img, stream6_img, stream7_img, stream8_img, stream9_img, stream10_img, stream11_img, stream12_img, stream13_img, stream14_img, stream15_img, stream16_img, stream17_img, stream18_img;

var slingShot1_img, slingShot2_img, slingShot3_img;
var waterTool1_img, waterTool2_img, waterTool3_img;
var nothing1_img, nothing2_img, nothing3_img;

var npcSprite_1, npcSprite_2;
var kitchen_decor1, kitchen_decor2, kitchen_decor3;

var level_0, level_1, level_2;

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

    ghost_moving = loadAnimation("js/img/ghosts/ghost1/ghost1.png", "js/img/ghosts/ghost1/ghost2.png", "js/img/ghosts/ghost1/ghost3.png", "js/img/ghosts/ghost1/ghost4.png", "js/img/ghosts/ghost1/ghost5.png", "js/img/ghosts/ghost1/ghost6.png", "js/img/ghosts/ghost1/ghost7.png", "js/img/ghosts/ghost1/ghost8.png", "js/img/ghosts/ghost1/ghost9.png")

    rocks_img = loadImage("js/img/rocks.png");
    rock_img = loadImage("js/img/rock.png");

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
        
        if(sceneState === 2) {
            noor.addImage("Morshu", npcSprite_2);
            kitchen1.addImage("kitchenDecor", kitchen_decor1);
            kitchen2.addImage("kitchenDecor", kitchen_decor2);
            kitchen3.addImage("kitchenDecor", kitchen_decor3);
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
}