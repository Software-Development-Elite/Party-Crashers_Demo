var enemy;

var enemy_friction = 0.5;
var enemy_speed = 1;

function enemy_setup() {
    enemy = createSprite(200,200,25,25);
    enemy.shapeColor = ("yellow");
    enemy.setCollider("rectangle", 0, 0, 25, 25);
    enemy.friction = enemy_friction;

  // enemy.attractionPoint(1, player.position.x, player.position.y);
}

function enemy_draw() {
    console.log("possible behavior to add later");

    
}

console.log("enemy.js is working");