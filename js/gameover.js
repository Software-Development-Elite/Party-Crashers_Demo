var gameOver = 2;

function gameoverDraw() {
    if(gameState === gameOver) {
        healthCount = healthMax;
        tool_type = "Sling Shot"
        slingShot_level = 1;
        waterTool_level = 0;
        ammoCount = 5;
        debugMode = false;
        level2_available = false;
        can_get_level3 = false
        level3_available = false;
        can_get_waterTool = false;
        wt_can_get_level1 = false;
        wt_can_get_level2 = false;
        wt_can_get_level3 = false;
        wt_level1_available = false;
        wt_level2_available = false;
        wt_level3_available = false;
        bossMusic.stop();
        

        player.destroy();
        enemy.destroy();
        enemy2.destroy();
        enemy3.destroy();
        item.destroy();
        player_detection.destroy();
        enemy_detection.destroy();
        healthBar.destroy();
        rock_pile.destroy();
        roundGroup.destroyEach();
        enemyRound_group.destroyEach();
        level2_sprite.destroy();
        level3_sprite.destroy();
        wt_level1_sprite.destroy();
        wt_level2_sprite.destroy();
        wt_level3_sprite.destroy();
        nothing_level1_sprite.destroy();
        nothing_level2_sprite.destroy();
        nothing_level3_sprite.destroy();
        stream_group.destroyEach();
        fy_next_level1 = false;
        fy_next_level2 = false;
        fy_next_level3 = false;
        f1_next_level1 = false;
        f1_next_level2 = false;
        f1_next_level3 = false;

        if(sceneState === 1) {
            front_yard_map.destroy();
            fy_transistion.destroy();
            worstfont.destroy();
            font_group.destroyEach();
            pumpkins[0].destroy();
            pumpkins[1].destroy();
            pumpkins[2].destroy();
            fy_edges.destroyEach();
            fy_walls.destroyEach();
            rock_pile.destroy();
            rock_pile2.destroy();
            rock_pile3.destroy();
            rock_pile4.destroy();
            rock_pile5.destroy();
        }

        if(sceneState === 2) {
            first_floor_map.destroy();
            f1_transistion.destroy();
            enemy4.destroy();
            enemy5.destroy();
            noor.destroy();
            kitchen1.destroy();
            kitchen2.destroy();
            kitchen3.destroy();
            f1_edges.destroyEach();
            f1_walls.destroyEach();
            cup[0].destroy();
            cup[1].destroy();
            cup[2].destroy();
            
        }

        if(sceneState === 3) {
            second_floor_map.destroy();
            f2_edges.destroyEach();
            michael.destroy();
            mikes_rocks_group.destroyEach();
            michaelHealthBar.destroy();
        }

        localStorage.setItem("previous1stScore", highscore1);
        localStorage.setItem("previous2ndScore", highscore2);
        prevScore1 = localStorage.getItem("previous1stScore");
        prevScore2 = localStorage.getItem("previous2ndScore");
        localStorage.setItem("score", score);
        newScore = localStorage.getItem("score");

        if(score > prevScore1) {
            highscore1 = newScore;
            if(prevScore1 > prevScore2) {
                highscore2 = prevScore1;

                if(prevScore2 > highscore3) {
                    highscore3 = prevScore2;
                }
            }
            localStorage.setItem("1st place", highscore1);
            localStorage.setItem("2nd place", highscore2);
            localStorage.setItem("3rd place", highscore3);
        }else if(score > prevScore2) {
            highscore2 = newScore;
            if(prevScore2 > highscore3) {
                highscore3 = prevScore2;
            }
            localStorage.setItem("2nd place", highscore2);
            localStorage.setItem("3rd place", highscore3);
        }else if(score > highscore3) {
            highscore3 = newScore;
            localStorage.setItem("3rd place", highscore3);
        }

        gameState = menuState;
        sceneState = level1;
        score = 0;
        enemyHealth = 5;
        enemy2Health = 5;
        enemy3Health = 5;
        enemy4Health = 10;
        enemy5Health = 10
        michaelHealth = 500;
        sansHealth1 = 5;
        sansHealth2 = 5;
        sansHealth3 = 5;
        noorHealth = 2;
        kit1Health = 1;
        kit2Health = 1;
        kit3Health = 1;
        setup();
        redraw();
    }
}