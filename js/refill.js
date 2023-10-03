var rock_pile;

function refill_setup() {
    rock_pile = createSprite(300, 215, 20, 20);
    rock_pile.shapeColor = ("gray");
}

function refill_system() {
    if(player.isTouching(rock_pile)) {
        ammoCount = ammoCount + 5;
        rock_pile.remove()
    }
}

console.log("refill.js is working");