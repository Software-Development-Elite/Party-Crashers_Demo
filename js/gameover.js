var gameOver = 2;

function gameoverDraw() {
    if(gameState === gameOver) {
        player.remove();
        enemy.remove();
        player_detection.remove();
        enemy_detection.remove();
        healthBar.remove();
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