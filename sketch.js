function preload() {
   preloader();
}

function setup() {
    createCanvas(1000,600);

    menuSetup();
    playSetup();
    preloadSetup();
}

function draw() {
    menuDraw();
    playDraw();
    gameoverDraw();
    drawSprites();
}