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

var chaseMode = 0;

function enemy_setup() {
    enemy = createSprite(200,200,25,25);
    enemy.shapeColor = ("yellow");
    enemy.setCollider("rectangle", 0, 0, 25, 25);
    enemy.friction = enemy_friction;

  // enemy.attractionPoint(1, player.position.x, player.position.y);
}

function enemy_draw() {
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

    console.log(score);

    if(chaseMode === 1) {
        enemy.attractionPoint(enemy_speed*2.5, player.position.x, player.position.y);
    }else if(chaseMode === 2) {
        enemy.attractionPoint(enemy_speed, player.position.x, player.position.y);
    }
}

console.log("enemy.js is working");