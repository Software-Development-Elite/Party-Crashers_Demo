var debugMode = false;

function debugEnabled() {
    if(keyDown("b")) {
        debugMode = true;
    }else if(keyDown("n")) {
        debugMode = false;
    }

    if (debugMode === true) {
        player.debug = true;
        enemy.debug = true;
        healthBar.debug = true;
        player_detection.debug = true;
        enemy_detection.debug = true;
    }else {
        player.debug = false;
        enemy.debug = false;
        healthBar.debug = false;
        player_detection.debug = false;
        enemy_detection.debug = false;
    }
}

console.log("debug.js is working");