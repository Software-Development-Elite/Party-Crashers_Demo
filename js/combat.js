var ammo;
var ammoCount = 5;
var round;
var roundGroup;
var roundDamage = 1;

var waterTank = 5000;
var stream1, stream2, stream3, stream_group;
var waterActive = false;
var stream1X, stream2X, stream3X;
var stream1Y, stream2Y, stream3Y;

var tool_type = "Sling Shot";
var slingShot_level = 1;
var waterTool_level = 0;

var enemyRound;
var enemyRound_group;

function combatSetup() {
    roundGroup = createGroup();
    enemyRound_group = createGroup();
    stream_group = createGroup();
}

function combatSystem() {
    //console.log(enemyHealth, enemy2Health, enemy3Health);
    if(tool_type === "Sling Shot") {
        if(ammoCount > 0) {
            if(keyDown("up_arrow")) {
                if(frameCount % 12 === 0) {
                    round = createSprite(player.x, player.y, 15, 15);
                    round.addImage(rock_img);
                    round.setCollider("rectangle", 0, 0, 15, 15);
                    round.rotationSpeed += 16;
                    roundGroup.add(round);
                    round.velocityY = -20;
                    ammoCount -= 1;
                }
            }else if(keyDown("left_arrow")) {
                side = left;
                if(frameCount % 12 === 0) {
                    round = createSprite(player.x, player.y, 15, 15);
                    round.addImage(rock_img);
                    round.setCollider("rectangle", 0, 0, 15, 15);
                    round.rotationSpeed += 16;
                    roundGroup.add(round);
                    round.velocityX = -20;
                    ammoCount -= 1;
                }
            }else if(keyDown("down_arrow")) {
                if(frameCount % 12 === 0) {
                    round = createSprite(player.x, player.y, 15, 15);
                    round.addImage(rock_img);
                    round.setCollider("rectangle", 0, 0, 15, 15);
                    round.rotationSpeed += 16;
                    roundGroup.add(round);
                    round.velocityY = 20;
                    ammoCount -= 1;
                }
            }else if(keyDown("right_arrow")) {
                side = right;
                if(frameCount % 12 === 0) {
                    round = createSprite(player.x, player.y, 15, 15);
                    round.addImage(rock_img);
                    round.setCollider("rectangle", 0, 0, 15, 15);
                    round.rotationSpeed += 16;
                    roundGroup.add(round);
                    round.velocityX = 20;
                    ammoCount -= 1;
                }
            }
        }
    }else if(tool_type === "Water Blaster") {
        if(waterTank > 0) {
            if(keyDown("right_arrow")) {
                side = right;
                stream1 = createSprite(player.x+64, player.y, 64, 64);
                stream2= createSprite(player.x+128, player.y, 64, 64);
                stream3 = createSprite(player.x+192, player.y, 64, 64);

                stream_group.add(stream1);
                stream_group.add(stream2);
                stream_group.add(stream3);
    
                stream1.addImage("stream1", stream1_img);
                stream2.addImage("stream2", stream2_img);
                stream3.addImage("stream3", stream3_img);
    
                waterTank -= 5;

                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream1);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream2);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream3);
                    console.log("removed");
                }
                waterActive = true;
            }else if(keyDown("left_arrow")) {
                side = left;
                stream1 = createSprite(player.x-64, player.y, 64, 64);
                stream2= createSprite(player.x-128, player.y, 64, 64);
                stream3 = createSprite(player.x-192, player.y, 64, 64);

                stream_group.add(stream1);
                stream_group.add(stream2);
                stream_group.add(stream3);
    
                stream1.addImage("stream4", stream4_img);
                stream2.addImage("stream5", stream5_img);
                stream3.addImage("stream6", stream6_img);
    
                waterTank -= 5;

                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream1);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream2);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream3);
                    console.log("removed");
                }
                waterActive = true;
            }else if(keyDown("down_arrow")){
                stream1 = createSprite(player.x, player.y+64, 64, 64);
                stream2= createSprite(player.x, player.y+128, 64, 64);
                stream3 = createSprite(player.x, player.y+192, 64, 64);

                stream_group.add(stream1);
                stream_group.add(stream2);
                stream_group.add(stream3);
                if(side === left) {
                    stream1.addImage("stream7", stream7_img);
                    stream2.addImage("stream8", stream8_img);
                    stream3.addImage("stream9", stream9_img);
                }else if(side === right) {
                    stream1.addImage("stream10", stream10_img);
                    stream2.addImage("stream11", stream11_img);
                    stream3.addImage("stream12", stream12_img);
                }

                waterTank -= 5;

                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream1);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream2);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream3);
                    console.log("removed");
                }
                waterActive = true;
            }else if(keyDown("up_arrow")){
                stream1 = createSprite(player.x, player.y-64, 64, 64);
                stream2= createSprite(player.x, player.y-128, 64, 64);
                stream3 = createSprite(player.x, player.y-192, 64, 64);

                stream_group.add(stream1);
                stream_group.add(stream2);
                stream_group.add(stream3);
                if(side === left) {
                    stream1.addImage("stream13", stream13_img);
                    stream2.addImage("stream14", stream14_img);
                    stream3.addImage("stream15", stream15_img);
                }else if(side === right) {
                    stream1.addImage("stream16", stream16_img);
                    stream2.addImage("stream17", stream17_img);
                    stream3.addImage("stream18", stream18_img);
                }

                waterTank -= 5;

                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream1);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream2);
                    console.log("removed");
                }
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream3);
                    console.log("removed");
                }
                waterActive = true;
            }else {
                if(waterActive === true) {
                    if(frameCount % 10 === 0) {
                        stream_group.destroyEach(stream1);
                        console.log("removed");
                    }
                    if(frameCount % 15 === 0) {
                        stream_group.destroyEach(stream2);
                        console.log("removed");
                    }
                    if(frameCount % 20 === 0) {
                        stream_group.destroyEach(stream3);
                        console.log("removed");
                    }
                }
            }
        }else {
            if(waterActive === true) {
                if(frameCount % 10 === 0) {
                    stream_group.destroyEach(stream1);
                    console.log("removed");
                }
                if(frameCount % 15 === 0) {
                    stream_group.destroyEach(stream2);
                    console.log("removed");
                }
                if(frameCount % 20 === 0) {
                    stream_group.destroyEach(stream3);
                    console.log("removed");
                }
            }
        }
    }

    if(player.isTouching(enemy)) {
        if(playerP_state === YU){
            player.velocityY = 50;
        }else if(playerP_state === XR) {
            player.velocityX = -50;
        }else if(playerP_state === YD) {
            player.velocityY = -50;
        }else if(playerP_state === XL) {
            player.velocityX = 50;
        }
    }else if(player.isTouching(enemy3)) {
        if(playerP_state === YU){
            player.velocityY = 50;
        }else if(playerP_state === XR) {
            player.velocityX = -50;
        }else if(playerP_state === YD) {
            player.velocityY = -50;
        }else if(playerP_state === XL) {
            player.velocityX = 50;
        }
    }else {
        player.velocityX = 0;
        player.velocityY = 0;
    }

    if(enemy.isTouching(roundGroup)) {
        console.log("logPost");
        enemy_chaseMode = 1;
        round.remove();
        enemyHealth -= roundDamage;
    }

    if(enemy2.isTouching(roundGroup)) {
        console.log("logPost");
        enemy2_chaseMode = 1;
        round.remove();
        enemy2Health -= roundDamage;
    }

    if(enemy3.isTouching(roundGroup)) {
        console.log("logPost");
        enemy3_chaseMode = 1;
        round.remove();
        enemy3Health -= roundDamage;
    }

    if(player.isTouching(enemyRound_group)) {
        enemyRound.remove();
        healthCount -= 10;
        healthBar.visible = true;
    }else {
        if(frameCount % 100 === 0) {
            healthBar.visible = false;
        }
    }

    if(fy_edges.isTouching(roundGroup)) {
        console.log("aaa");
        round.remove();
    }

    if(enemy_chaseMode === 1 || enemy_chaseMode === 2) {
        if(frameCount % 160 === 0) {
            if(enemy_position === enemyY1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =-20;
            }else if(enemy_position === enemyY1X1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =-20;
                enemyRound.velocityX =-20;
            }else if(enemy_position === enemyX1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityX =-20;
            }else if(enemy_position === enemyY2X1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =20;
                enemyRound.velocityX =-20;
            }else if(enemy_position === enemyY2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =20;
            }else if(enemy_position === enemyY2X2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =20;
                enemyRound.velocityX =20;
            }else if(enemy_position === enemyX2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityX =20;
            }else if(enemy_position === enemyY1X2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =-20;
                enemyRound.velocityX =20;
            }
        }
    }

    if(enemyHealth < 0){
        enemyHealth = 0;
    }

    if(enemy2Health < 0){
        enemy2Health = 0;
    }

    if(enemy3Health < 0){
        enemy3Health = 0;
    }
}

console.log("combat.js is working");