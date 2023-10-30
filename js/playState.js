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
        michaelSetup();
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
        michaelDraw();
        preloadDraw();

        combatSystem();
        scoringSystem();
        refill_system();

        if(keyDown("p")) {
            healthCount = 0;
        }

        debugEnabled();
    }
}

console.log("playState.js is working");