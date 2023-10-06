var player_detection;
var enemy_detection;

function detection_setup() {
    player_detection = createSprite(player.x, player.y, 1, 1);
    player_detection.depth = player.depth-1;
    player_detection.setCollider("circle", 0, 0, 100);

    enemy_detection = createSprite(enemy.x, enemy.y, 1, 1);
    enemy_detection.depth = enemy.depth-1;
    enemy_detection.setCollider("circle", 0, 0, 100);
}

function detection_draw() {
    player_detection.x = player.x;
    player_detection.y = player.y;

    enemy_detection.x = enemy.x;
    enemy_detection.y = enemy.y;

    if(player.isTouching(enemy_detection)){
        enemy.shapeColor = ("red");
        chaseMode = 2;
    }else if(player_detection.isTouching(enemy_detection)){
        enemy.shapeColor = ("orange");
    }else {
        enemy.shapeColor = ("yellow")
        if(frameCount % 300 === 0) {
            if(chaseMode === 2) {
                chaseMode = 0;
            }
        }
    }
}
console.log("detection.js is working");