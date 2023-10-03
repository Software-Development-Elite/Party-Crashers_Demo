function preload() {
    player_img = loadImage("js/img/player.png");
}

function setup() {
    createCanvas(1000,600);

    menuSetup();
    playSetup();
}

function draw() {
    menuDraw();
    playDraw();
    gameoverDraw();
    drawSprites();
}