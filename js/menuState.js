var menuState = 0 ;

var start_button;

function menuSetup() {
    if(gameState === menuState) {
        start_button = createSprite(500, 300, 80, 50);
        start_button.shapeColor = ("green");
        camera.x = 500;
        camera.y = 300
    }
}

function menuDraw() {
    if(gameState === menuState) {
        background("purple");
        if(mousePressedOver(start_button)) {
            gameState = playState;
            setup();
            redraw();
        }
    }
}

console.log("menuState.js is working");