var playState = 1;

function playSetup() {
    if(gameState === playState) {
        start_button.remove();

        sceneSetup();
        player_setup();
        enemy_setup();
        health_setup();
        detection_setup();
        combatSetup();
    }
}

function playDraw() {
    if(gameState === playState) {
        background("black");
        player_draw();
        health_draw();
        detection_draw();
        fy_draw();
        preloadDraw();

        combatSystem();
        refill_system();

        debugEnabled();
    }
}

console.log("playState.js is working");