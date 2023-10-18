var healthCount = 100;
var healthMax = 100;
var healthBar;

var enemyHealth = enemyHMax; 
var enemyHMax = 5;

var enemy2Health = enemyHMax; 
var enemy2HMax = 5;

var enemy3Health = enemyHMax; 
var enemy3HMax = 5;

function health_setup() {
    healthBar = createSprite(player.x, player.y-30, healthCount/3, 7);
    healthBar.visible=false;
}

function health_draw() {
    healthBar.x = player.x;
    healthBar.y = player.y-30;

    healthBar.width = healthCount/3;

    if(player.isTouching(enemy)) {
        healthCount -= 5;
        healthBar.visible=true;
    }else{
        if(frameCount % 200 === 0){
            healthBar.visible=false;
        }
    }

    if(player.isTouching(enemy3)) {
        healthCount -= 5;
        healthBar.visible=true;
    }else{
        if(frameCount % 200 === 0){
            healthBar.visible=false;
        }
    }

    if(healthCount > 75){
        healthBar.shapeColor = ("green");
    }else if(healthCount > 50) {
        healthBar.shapeColor = ("yellow");
    }else if(healthBar > 25) {
        healthBar.shapeColor = ("orange");
    }else {
        healthBar.shapeColor = ("red");
    }

    if(healthCount < 0) {
        healthCount = 0;
    }

    if(healthCount === 0) {
        gameState = gameOver;
    }

    if(keyDown("v")) {
        healthBar.visible = true;
    }

    if(enemyHealth === 0) {
        enemy.remove();
        enemy_detection.remove();
        enemyKilled += 1;
        enemy_chaseMode = 0;
    }

    if(enemy2Health === 0) {
        enemy2.remove();
        //enemy2_detection.remove();
        enemy2Killed += 1;
        enemy2_chaseMode = 0;
    }

    if(enemy3Health === 0) {
        enemy3.remove();
        //enemy2_detection.remove();
        enemy3Killed += 1;
        enemy3_chaseMode = 0;
    }
}

console.log("health.js is working");