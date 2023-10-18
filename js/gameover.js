var gameOver = 2;

function gameoverDraw() {
    if(gameState === gameOver) {
        player.destroy();
        enemy.destroy();
        enemy2.destroy();
        enemy3.destroy();
        player_detection.destroy();
        enemy_detection.destroy();
        healthBar.destroy();
        rock_pile.destroy();
        roundGroup.destroyEach();
        enemyRound_group.destroyEach();
        if(sceneState === 1) {
            front_yard_map.remove();
            fy_top.remove();
            fy_left.remove();
            fy_right.remove();
            fy_bottom.remove();
            fy_wall1.remove();
            fy_wall2.remove();
            fy_wall3.remove();
            fy_wall4.remove();
            rock_pile.remove();
            rock_pile2.remove();
            rock_pile3.remove();
            rock_pile4.remove();
            rock_pile5.remove();
        }

        gameState = menuState;
        setup();
        redraw();
    }
}