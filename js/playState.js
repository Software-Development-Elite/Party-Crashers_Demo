var playState = 1;

function playSetup() {
    if(gameState === playState) {
        sceneSetup();
        player_setup();
        enemy_setup();
        health_setup();
        detection_setup();
        gui_setup();
        combatSetup();
    }
}

function playDraw() {
    if(gameState === playState) {
        background("black");
        player_draw();
        health_draw();
        detection_draw();
        enemy_draw();
        fy_draw();
        collisionDraw();
        gui_draw();
        preloadDraw();

        combatSystem();
        scoringSystem();
        refill_system();

        debugEnabled();
    }
}

console.log("playState.js is working");