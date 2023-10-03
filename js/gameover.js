var gameOver = 2;

function gameoverDraw() {
    if(gameState === gameOver) {
        player.remove();
        enemy.remove();
        player_detection.remove();
        enemy_detection.remove();
        healthBar.remove();

        gameState = menuState;
        setup();
        redraw();
    }
}