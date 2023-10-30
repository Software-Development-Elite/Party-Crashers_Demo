var sceneChange = 3;

var sceneState = 1;
var level1 = 1;
var level2 = 2;
var level3 = 3;

var front_yard_map;
var fy_top, fy_left, fy_right, fy_bottom;
var fy_edges, fy_walls;
var fy_wall1, fy_wall2, fy_wall3, fy_wall4, fy_wall5;
var fy_transistion;
var fy_next_level1 = false;
var fy_next_level2 = false;
var fy_next_level3 = false;
var worstfont;
var font_bullets;
var font_group;
var sansHealth1 = 5;
var sansHealth2 = 5
var sansHealth3 = 5;;
var sansScores = [0,0,0];
var pumpkinHealth = [1, 1, 1];
var pumpkins = [0,0,0];
var pumpkinScore = [0,0,0];

var first_floor_map;
var f1_top, f1_left, f1_right, f1_bottom;
var f1_edges;
var f1_wall1, f1_wall2, f1_wall3, f1_wall4, f1_walls;
var f1_transistion;
var f1_next_level1 = false;
var f1_next_level2 = false;
var f1_next_level3 = false;
var noor;
var kitchen1, kitchen2, kitchen3;
var noorHealth = 2;
var kit1Health = 1;
var kit2Health = 1;
var kit3Health = 1;
var level2Scores = [0, 0, 0, 0];

var second_floor_map;
var f2_top, f2_left, f2_right, f2_bottom;
var f2_edges;

function sceneSetup() {
    front_yard();
    first_floor();
    second_floor();
}

function front_yard() {
    if(sceneState === level1) {
        front_yard_map = createSprite(200, 200, 1000, 600);

        fy_transistion = createSprite(330, -70, 50, 50);
        fy_transistion.rotationSpeed += 50;
        fy_transistion.shapeColor = ("yellow");
        fy_transistion.visible = false;

        worstfont = createSprite(600, 345, 50, 50);

        pumpkins[0] = createSprite(515, 75, 50, 50);
        pumpkins[1] = createSprite(579, 75, 50, 50);
        pumpkins[2] = createSprite(643, 75, 50, 50);

        fy_top = createSprite(front_yard_map.x, front_yard_map.y-300, front_yard_map.width, 10);
        fy_top.visible=false;
        fy_left = createSprite(front_yard_map.x-500, front_yard_map.y, 10, front_yard_map.height);
        fy_left.visible=false;
        fy_right = createSprite(front_yard_map.x+500, front_yard_map.y, 10, front_yard_map.height);
        fy_right.visible=false;
        fy_bottom = createSprite(front_yard_map.x, front_yard_map.y+300, front_yard_map.width, 10);
        fy_bottom.visible=false;

        fy_edges = createGroup();
        
        fy_edges.add(fy_top);
        fy_edges.add(fy_left);
        fy_edges.add(fy_right);
        fy_edges.add(fy_bottom);

        fy_walls = createGroup();

        fy_wall1 = createSprite(120, 25, 230, 50);
        fy_wall1.visible = false
        fy_wall2 = createSprite(-7, -40, 20, 130);
        fy_wall2.visible = false;
        fy_wall3 = createSprite(550, 25, 230, 50);
        fy_wall3.visible = false;
        fy_wall4 = createSprite(665, -60, 20, 130);
        fy_wall4.visible = false;
        fy_wall5 = createSprite(-165, 205, 250, 600);
        fy_wall5.visible = false

        fy_walls.add(fy_wall1);
        fy_walls.add(fy_wall2);
        fy_walls.add(fy_wall3);
        fy_walls.add(fy_wall4);
        fy_walls.add(fy_wall5);

        font_group = createGroup();

        refill_setup();
    }
}

function first_floor() {
    if(sceneState === level2) {
        first_floor_map = createSprite(200, 200, 1000, 600);
        first_floor_map.shapeColor = ("blue");

        noor = createSprite(630, -40, 25, 25);
        kitchen1 = createSprite(-270, 447, 50, 50);
        kitchen2 = createSprite(-270, 312, 50, 50);
        kitchen3 = createSprite(-270, 232, 50, 50);

        f1_top = createSprite(first_floor_map.x, first_floor_map.y-300, first_floor_map.width, 10);
        f1_top.visible=false;
        f1_left = createSprite(first_floor_map.x-500, first_floor_map.y, 10, first_floor_map.height);
        f1_left.visible=false;
        f1_right = createSprite(first_floor_map.x+500, first_floor_map.y, 10, first_floor_map.height);
        f1_right.visible=false;
        f1_bottom = createSprite(first_floor_map.x, first_floor_map.y+285, first_floor_map.width, 10);
        f1_bottom.visible=false;

        f1_wall1 = createSprite(front_yard_map.x-80, front_yard_map.y+15, 60, 170);
        f1_wall1.visible = false;
        f1_wall2 = createSprite(520, 140, 360, 30);
        f1_wall2.visible = false;
        f1_wall3 = createSprite(-170, 190, 250, 5);
        f1_wall3.visible = false;
        f1_wall4 = createSprite(520, 295, 350, 20);
        f1_wall4.visible = false;

        f1_edges = createGroup()

        f1_edges.add(f1_top);
        f1_edges.add(f1_left);
        f1_edges.add(f1_right);
        f1_edges.add(f1_bottom);

        f1_walls = createGroup();
        
        f1_walls.add(f1_wall1);
        f1_walls.add(f1_wall2);
        f1_walls.add(f1_wall3);
        f1_walls.add(f1_wall4);

        f1_transistion = createSprite(140, 250, 50, 50);
        f1_transistion.rotationSpeed += 50;
        f1_transistion.shapeColor = ("yellow");
        f1_transistion.visible = false;

        refill_setup();
    }
}

function second_floor() {
    if(sceneState === level3) {
        second_floor_map = createSprite(200, 200, 1000, 600);
        second_floor_map.shapeColor = ("blue");

        f2_top = createSprite(second_floor_map.x, second_floor_map.y-300, second_floor_map.width, 10);
        f2_top.visible=false;
        f2_left = createSprite(second_floor_map.x-500, second_floor_map.y, 10, second_floor_map.height);
        f2_left.visible=false;
        f2_right = createSprite(second_floor_map.x+500, second_floor_map.y, 10, second_floor_map.height);
        f2_right.visible=false;
        f2_bottom = createSprite(second_floor_map.x, second_floor_map.y+285, second_floor_map.width, 10);
        f2_bottom.visible=false;

        f2_edges = createGroup();

        f2_edges.add(f2_top);
        f2_edges.add(f2_left);
        f2_edges.add(f2_right);
        f2_edges.add(f2_bottom);

        refill_setup();
    }
}

function fy_draw() {
    if(sceneState === 1){
        player.collide(fy_edges);
        player.collide(fy_walls);
        player.collide(worstfont);

        if(frameCount % 30 === 0) {
            font_bullets = createSprite(worstfont.x, worstfont.y, 10, 10);
            font_bullets.attractionPoint(15, player.position.x, player.position.y);
            font_group.add(font_bullets);
        }

        if(player.isTouching(font_group)) {
            font_group.destroyEach();
            healthCount -= 2;
        }

        if(enemy.x > front_yard_map.x && enemy.x < front_yard_map.x && enemy.y > front_yard_map.y && enemyk.y < front_yard_map.y) {
            enemy.x = 200;
            enemy.y = 200;
        }

        if(enemy2.x > front_yard_map.x && enemy2.x < front_yard_map.x && enemy2.y > front_yard_map.y && enemy2.y < front_yard_map.y) {
            enemy2.x = 200;
            enemy2.y = 200;
        }

        if(enemy3.x > front_yard_map.x && enemy2.x < front_yard_map.x && enemy2.y > front_yard_map.y && enemy2.y < front_yard_map.y) {
            enemy3.x = 200;
            enemy3.y = 200;
        }

        if(worstfont.isTouching(roundGroup)) {
            if(sansHealth1 > 0) {
                sansHealth1 -= 1;
            }else if(sansHealth2 > 0) {
                sansHealth2 -= 1;
            }else if(sansHealth3 > 0) {
                sansHealth3 -= 1;
            }

            roundGroup.destroyEach();
        }

        if(worstfont.isTouching(stream_group)) {
            if(sansHealth1 > 0) {
                sansHealth1 -= 1;
            }else if(sansHealth2 > 0) {
                sansHealth2 -= 1;
            }else if(sansHealth3 > 0) {
                sansHealth3 -= 1;
            }
        }

        if(pumpkins[0].isTouching(roundGroup)) {
            pumpkinHealth[0] -= 1;
            roundGroup.destroyEach();
        }

        if(pumpkins[1].isTouching(roundGroup)) {
            pumpkinHealth[1] -= 1;
            roundGroup.destroyEach();
        }

        if(pumpkins[2].isTouching(roundGroup)) {
            pumpkinHealth[2] -= 1;
            roundGroup.destroyEach();
        }

        if(pumpkins[0].isTouching(stream_group)) {
            pumpkinHealth[0] -= 0.1
        }

        if(pumpkins[1].isTouching(stream_group)) {
            pumpkinHealth[1] -= 0.1
        }

        if(pumpkins[2].isTouching(stream_group)) {
            pumpkinHealth[2] -= 0.1
        }

        if(sansHealth1 <= 0) {
            sansScores[0] = 3;
        }

        if(sansHealth2 <= 0) {
            sansScores[1] = 3;
        }

        if(sansHealth3 <= 0) {
            sansScores[2] = 3;
        }

        if(pumpkinHealth[0] <= 0) {
            pumpkins[0].destroy();
            pumpkinScore[0] = 5;
        }

        if(pumpkinHealth[1] <= 0) {
            pumpkins[1].destroy();
            pumpkinScore[1] = 5;
        }

        if(pumpkinHealth[2] <= 0) {
            pumpkins[2].destroy();
            pumpkinScore[2] = 5;
        }


        if(fy_next_level1 === true && fy_next_level2 === true && fy_next_level3 === true) {
            fy_transistion.visible = true;
            if(player.isTouching(fy_transistion)) {
                sceneState = level2;
                gameState = sceneChange;
                scene_change();
            }
        }
    }

    if(sceneState === 2) {
        player.collide(f1_edges);
        player.collide(f1_walls);
        player.collide(noor);
        player.collide(kitchen1);
        player.collide(kitchen2);
        player.collide(kitchen3);

        if(noor.isTouching(roundGroup)) {
            noorHealth -= 1;
            roundGroup.destroyEach();
        }

        if(kitchen1.isTouching(roundGroup)) {
            kit1Health -= 1;
            roundGroup.destroyEach();
        }

        if(kitchen2.isTouching(roundGroup)) {
            kit2Health -= 1;
            roundGroup.destroyEach();
        }

        if(kitchen3.isTouching(roundGroup)) {
            kit3Health -= 1;
            roundGroup.destroyEach();
        }

        if(noor.isTouching(stream_group)) {
            noorHealth -= 0.1;
        }

        if(kitchen1.isTouching(stream_group)) {
            kit1Health -= 0.1;
        }

        if(kitchen2.isTouching(stream_group)) {
            kit2Health -= 0.1;
        }

        if(kitchen3.isTouching(stream_group)) {
            kit3Health -= 0.1;
        }

        if(noorHealth <= 0) {
            level2Scores[0] = 30;
            noor.destroy();
            noorHealth = "none";
        }

        if(kit1Health <= 0) {
            level2Scores[1] = 10;
            kitchen1.destroy();
            kit1Health = "none";
        }

        if(kit2Health <= 0) {
            level2Scores[2] = 10;
            kitchen2.destroy();
            kit2Health = "none";
        }

        if(kit3Health <= 0) {
            level2Scores[3] = 10;
            kitchen3.destroy();
            kit3Health = "none";
        }

        if(f1_next_level1 === true && f1_next_level2 === true && f1_next_level3 === true) {
            f1_transistion.visible = true;
            if(player.isTouching(f1_transistion)) {
                sceneState = level3;
                gameState = sceneChange;
                scene_change();
            }
        }
    }

    if(sceneState === 3) {
        player.collide(f2_edges);
       // player.collide(f2_walls);
    }
}

function scene_change() {
        //enemyHealth = 5;
        //enemy2Health = 5;
        //enemy3Health = 5;
    if(gameState === sceneChange) {
        player.destroy();
        enemy.destroy();
        enemy2.destroy();
        enemy3.destroy();
        item.destroy();
        level2_sprite.destroy();
        level3_sprite.destroy();
        wt_level1_sprite.destroy();
        worstfont.destroy();
        font_group.destroyEach();
        player_detection.destroy();
        enemy_detection.destroy();
        healthBar.destroy();
        rock_pile.destroy();
        roundGroup.destroyEach();
        stream_group.destroyEach();
        enemyRound_group.destroyEach();
        if(sceneState === 2) {
            healthCount = healthCount+100;
            front_yard_map.destroy();
            fy_transistion.destroy();
            fy_top.destroy();
            fy_left.destroy();
            fy_right.destroy();
            fy_bottom.destroy();
            rock_pile.destroy();
            rock_pile2.destroy();
            rock_pile3.destroy();
            rock_pile4.destroy();
            rock_pile5.destroy();
        }else if(sceneState === 3) {
            healthCount+100;
            first_floor_map.destroy();
            f1_transistion.destroy();
            f1_walls.destroyEach();
            f1_edges.destroyEach();
            enemy4.destroy();
            enemy5.destroy();
            noor.destroy();
            kitchen1.destroy();
            kitchen2.destroy();
            kitchen3.destroy();
            cup[0].destroy();
            cup[1].destroy();
            cup[2].destroy();
        }

        gameState = playState;

        setup();
        redraw();
    }
}

console.log("scene.js is working");