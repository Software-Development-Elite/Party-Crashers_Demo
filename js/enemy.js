var enemy;

function enemy_setup() {
    enemy = createSprite(100,100,25,25);
    enemy.shapeColor = ("yellow");
}

function enemy_draw() {
    console.log("possible behavior to add later");
}

console.log("enemy.js is working");