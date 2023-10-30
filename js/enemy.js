var enemy;
var enemy_position = 1;
var enemyY1 = 1;
var enemyY1X1 = 1.5;
var enemyX1 = 2;
var enemyY2X1 = 2.5;
var enemyY2 = 3;
var enemyY2X2 = 3.5;
var enemyX2 = 4;
var enemyY1X2 = 4.5;
var enemy_friction = 0.5;
var enemy_speed = 1;
var enemyCount = 1;
var enemyKilled = 0;
var enemy_chaseMode = 0;

var enemy2;
var enemy2_position = 1;
var enemy2Y1 = 1;
var enemy2Y1X1 = 1.5;
var enemy2X1 = 2;
var enemy2Y2X1 = 2.5;
var enemy2Y2 = 3;
var enemy2Y2X2 = 3.5;
var enemy2X2 = 4;
var enemy2Y1X2 = 4.5;
var enemy2_friction = 0.5;
var enemy2_speed = 1;
var enemy2Count = 1;
var enemy2Killed = 0;
var enemy2_chaseMode = 0;
var enemy2_VelocityMode = 0;

var enemy3;
var enemy3_position = 1;
var enemy3Y1 = 1;
var enemy3Y1X1 = 1.5;
var enemy3X1 = 2;
var enemy3Y2X1 = 2.5;
var enemy3Y2 = 3;
var enemy3Y2X2 = 3.5;
var enemy3X2 = 4;
var enemy3Y1X2 = 4.5;
var enemy3_friction = 0.5;
var enemy3_speed = 1;
var enemy3Count = 1;
var enemy3Killed = 0;
var enemy3_chaseMode = 0;

var enemy4;
var enemy4_position = 1;
var enemy4Y1 = 1;
var enemy4Y1X1 = 1.5;
var enemy4X1 = 2;
var enemy4Y2X1 = 2.5;
var enemy4Y2 = 3;
var enemy4Y2X2 = 3.5;
var enemy4X2 = 4;
var enemy4Y1X2 = 4.5;
var enemy4_friction = 0.5;
var enemy4_speed = 1;
var enemy4Count = 1;
var enemy4Killed = 0;
var enemy4_chaseMode = 0;

var enemy5;
var enemy5_position = 1;
var enemy5Y1 = 1;
var enemy5Y1X1 = 1.5;
var enemy5X1 = 2;
var enemy5Y2X1 = 2.5;
var enemy5Y2 = 3;
var enemy5Y2X2 = 3.5;
var enemy5X2 = 4;
var enemy5Y1X2 = 4.5;
var enemy5_friction = 0.5;
var enemy5_speed = 1;
var enemy5Count = 1;
var enemy5Killed = 0;
var enemy5_chaseMode = 0;
var enemy5Side = 1;
var enemy5Left = 1;
var enemy5Right = 2;



function enemy_setup() {
    if(sceneState === 1) {
        enemy = createSprite(200,200,25,25);
        enemy.shapeColor = ("yellow");
        enemy.setCollider("rectangle", 0, 0, 25, 25);
        enemy.friction = enemy_friction;

        enemy2 = createSprite(300,300,25,25);
        enemy2.shapeColor = ("yellow");
        enemy2.setCollider("rectangle", 0, 0, 25, 25);
        enemy2_VelocityMode = Math.round(random(1,4));
        if(enemy2_VelocityMode === 1) {
            enemy2.velocityY = -10;
        }else if(enemy2_VelocityMode === 2) {
            enemy2.velocityX = -10;
        }else if(enemy2_VelocityMode === 3) {
            enemy2.velocityY = 10;
        }else {
            enemy2.velocityX = 10;
        }
    //enemy2.friction = enemy_friction;

        enemy3 = createSprite(150,200,25,25);
        enemy3.shapeColor = ("yellow");
        enemy3.setCollider("rectangle", 0, 0, 25, 25);
        enemy3.friction = enemy_friction;

  // enemy.attractionPoint(1, player.position.x, player.position.y);
    }

    if(sceneState === 2) {
        enemy4 = createSprite(200,200,25,25);
        enemy4.friction = enemy_friction;

        enemy5 = createSprite(150,200,25,25);
        enemy5.shapeColor = ("yellow");
        enemy5.setCollider("rectangle", 0, 0, 25, 25);
        enemy5.friction = enemy_friction;
    }
}

function enemy_draw() {

    if(sceneState === 1) {
        console.log(enemy.velocityX, enemy.velocityY);
        console.log(enemy_position);

        if(enemy.velocityY < 0 && enemy.velocityY < enemy.velocityX) {
            enemy_position = enemyY1;
        }else if(enemy.velocityY > 0 && enemy.velocityY > enemy.velocityX) {
            enemy_position = enemyY2;
        }else if(enemy.velocityX < 0 && enemy.velocityX < enemy.velocityY) {
            enemy_position = enemyX1;
        }else if(enemy.velocityX > 0 && enemy.velocityX > enemy.velocityY) {
            enemy_position = enemyX2;
        }

        if(enemyKilled > enemyCount) {
            enemyKilled = enemyCount;
        //scoringSystem();
        }else if(enemyKilled <= enemyCount) {
            console.log(enemyKilled);
        }

        if(enemy2Killed > enemy2Count) {
            enemy2Killed = enemy2Count;
        //scoringSystem();
        }else if(enemy2Killed <= enemy2Count) {
            console.log(enemy2Killed);
        }

        if(enemy3Killed > enemy3Count) {
            enemy3Killed = enemy3Count;
        //scoringSystem();
        }else if(enemy3Killed <= enemy3Count) {
            console.log(enemy3Killed);
        }

        if(enemy4Killed > enemy4Count) {
            enemy4Killed = enemy4Count;
        //scoringSystem();
        }else if(enemy4Killed <= enemy4Count) {
            console.log(enemy4Killed);
        }

        if(enemy5Killed > enemy5Count) {
            enemy5Killed = enemy5Count;
        //scoringSystem();
        }else if(enemy5Killed <= enemy5Count) {
            console.log(enemy5Killed);
        }

        console.log(score);

        if(enemy_chaseMode === 1) {
            enemy.attractionPoint(enemy_speed*2.5, player.position.x, player.position.y);
        }else if(enemy_chaseMode === 2) {
            enemy.attractionPoint(enemy_speed, player.position.x, player.position.y);
        }
        enemy3.attractionPoint(enemy_speed, player.position.x, player.position.y);

        if(frameCount % 300 === 0) {
            enemy3.attractionPoint(enemy_speed*125, previous_playerX, previous_playerY);
        }
    }else if(sceneState === 2) {
        enemy4.attractionPoint(enemy_speed*2.5, player.position.x, player.position.y);

        if(enemy4.velocityY < 0 && enemy4.velocityY < enemy4.velocityX) {
            enemy_position = enemyY1;
        }else if(enemy4.velocityY > 0 && enemy4.velocityY > enemy4.velocityX) {
            enemy_position = enemyY2;
        }else if(enemy4.velocityX < 0 && enemy4.velocityX < enemy4.velocityY) {
            enemy_position = enemyX1;
        }else if(enemy4.velocityX > 0 && enemy4.velocityX > enemy4.velocityY) {
            enemy_position = enemyX2;
        }

        enemy5.attractionPoint(enemy_speed, player.position.x, player.position.y);

        if(player.x > enemy5.x) {
            enemy5.changeImage("no face 1");
        }else if(player.x < enemy5.x) {
            enemy5.changeImage("no face 2");
        }

        if(frameCount % 300 === 0) {
            enemy5.attractionPoint(enemy_speed*200, previous_playerX, previous_playerY);
        }
    }

}

console.log("enemy.js is working");