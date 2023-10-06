var gameOver = 2;

function gameoverDraw() {
    if(gameState === gameOver) {
        player.destroy();
        enemy.destroy();
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
            rock_pile.remove();
        }

        gameState = menuState;
        setup();
        redraw();
    }
}