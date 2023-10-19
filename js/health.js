var healthCount = 100;
var healthMax = 100;
var healthBar;

var enemyHealth = enemyHMax; 
var enemyHMax = 5;

var enemy2Health = enemy2HMax; 
var enemy2HMax = 5;

var enemy3Health = enemy3HMax; 
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
        if(level2_available === false){
            level2_sprite.x = enemy.x;
            level2_sprite.y = enemy.y;
            level2_sprite.width = 50;
            level2_sprite.width = 50;
            level2_sprite.visible = true;
            level2_sprite.rotationSpeed += 20;
            level2_available = true;
        }else {
            console.log("here's level 2");
        }

        if(can_get_level3 === true) {
            if(level3_available === false) {
                level3_sprite.x = enemy.x;
                level3_sprite.y = enemy.y;
                level3_sprite.width = 50;
                level3_sprite.width = 50;
                level3_sprite.visible = true;
                level3_sprite.rotationSpeed += 20;
                level3_available = true;
            }else {
                console.log("here's level 3")
            }
        }

        if(wt_can_get_level1 === true) {
            if(wt_level1_available === false) {
                wt_level1_sprite.x = enemy.x;
                wt_level1_sprite.y = enemy.y;
                wt_level1_sprite.width = 50;
                wt_level1_sprite.width = 50;
                wt_level1_sprite.visible = true;
                wt_level1_sprite.rotationSpeed += 20;
                wt_level1_available = true;
            }else {
                console.log("here's the Water Blaster");
            }
        }
        enemy.remove();
        enemy_detection.remove();
        enemyKilled += 1;
        enemy_chaseMode = 0
        enemyHealth = "none";
    }

    if(enemy2Health === 0) {
        if(level2_available === false){
            level2_sprite.x = enemy2.x;
            level2_sprite.y = enemy2.y;
            level2_sprite.width = 50;
            level2_sprite.width = 50;
            level2_sprite.visible = true;
            level2_sprite.rotationSpeed += 20;
            level2_available = true;
        }else {
            console.log("here's level 2");
        }

        if(can_get_level3 === true) {
            if(level3_available === false) {
                level3_sprite.x = enemy2.x;
                level3_sprite.y = enemy2.y;
                level3_sprite.width = 50;
                level3_sprite.width = 50;
                level3_sprite.visible = true;
                level3_sprite.rotationSpeed += 20;
                level3_available = true;
            }else {
                console.log("here's level 3")
            }
        }

        if(wt_can_get_level1 === true) {
            if(wt_level1_available === false) {
                wt_level1_sprite.x = enemy2.x;
                wt_level1_sprite.y = enemy2.y;
                wt_level1_sprite.width = 50;
                wt_level1_sprite.width = 50;
                wt_level1_sprite.visible = true;
                wt_level1_sprite.rotationSpeed += 20;
                wt_level1_available = true;
            }else {
                console.log("here's the Water Blaster");
            }
        }
        enemy2.remove();
        //enemy2_detection.remove();
        enemy2Killed += 1;
        enemy2_chaseMode = 0;
        enemy2Health = "none";
    }

    if(enemy3Health === 0) {
        if(level2_available === false){
            level2_sprite.x = enemy3.x;
            level2_sprite.y = enemy3.y;
            level2_sprite.width = 50;
            level2_sprite.width = 50;
            level2_sprite.visible = true;
            level2_sprite.rotationSpeed += 20;
            level2_available = true;
        }else {
            console.log("here's level 2");
        }

        if(can_get_level3 === true) {
            if(level3_available === false) {
                level3_sprite.x = enemy3.x;
                level3_sprite.y = enemy3.y;
                level3_sprite.width = 50;
                level3_sprite.width = 50;
                level3_sprite.visible = true;
                level3_sprite.rotationSpeed += 20;
                level3_available = true;
            }else {
                console.log("here's level 3")
            }
        }

        if(wt_can_get_level1 === true) {
            if(wt_level1_available === false) {
                wt_level1_sprite.x = enemy3.x;
                wt_level1_sprite.y = enemy3.y;
                wt_level1_sprite.width = 50;
                wt_level1_sprite.width = 50;
                wt_level1_sprite.visible = true;
                wt_level1_sprite.rotationSpeed += 20;
                wt_level1_available = true;
            }else {
                console.log("here's the Water Blaster");
            }
        }

        
        enemy3.remove();
        //enemy2_detection.remove();
        enemy3Killed += 1;
        enemy3_chaseMode = 0;
        enemy3Health = "none";
    }
}

console.log("health.js is working");