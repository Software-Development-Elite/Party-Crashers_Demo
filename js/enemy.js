var enemy;

function enemy_setup() {
    enemy = createSprite(200,200,25,25);
    enemy.shapeColor = ("yellow");
    enemy.setCollider("rectangle", 0, 0, 25, 25);
}

function enemy_draw() {
    console.log("possible behavior to add later");
}

console.log("enemy.js is working");