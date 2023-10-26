var menuState = 0 ;

var start_button;

var newScore;

var highscore1 = 0;
var highscore2 = 0;
var highscore3 = 0;

function menuSetup() {
    if(gameState === menuState) {
        start_button = createSprite(500, 300, 80, 50);
        start_button.shapeColor = ("green");
        camera.x = 500;
        camera.y = 300;

        textSize(50);
    }
}

function menuDraw() {
    if(gameState === menuState) {
        background("purple");

        newScore = localStorage.getItem("score");


        highscore1 = localStorage.getItem("1st place");
        highscore2 = localStorage.getItem("2nd place");
        highscore3 = localStorage.getItem("3rd place");

        if(highscore1 === null) {
            highscore1 = 0;
        }
        if(highscore2 === null) {
            highscore2 = 0;
        }
        if(highscore3 === null) {
            highscore3 = 0;
        }


        text("1."+highscore1, 100,100);
        text("2."+highscore2, 100,150);
        text("3."+highscore3, 100,200);

        if(mousePressedOver(start_button)) {
            gameState = playState;
            start_button.remove();
            setup();
            redraw();
        }

        if(keyDown("k")){
            localStorage.clear();
        }
    }
}

console.log("menuState.js is working");