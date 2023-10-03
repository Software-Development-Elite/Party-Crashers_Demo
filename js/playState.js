var playState = 1;

function playSetup() {
    if(gameState === playState) {
        start_button.remove();

        player_setup();
        enemy_setup();
        health_setup();
        detection_setup();
    }
}

function playDraw() {
    if(gameState === playState) {
        background("black");
        player_draw();
        health_draw();
        detection_draw();

        debugEnabled();
    }
}

console.log("playState.js is working");