var rock_pile;
var rock_pile2;
var rock_pile3;
var rock_pile4;
var rock_pile5;

function refill_setup() {
    rock_pile = createSprite(300, 215, 20, 20);
    rock_pile.shapeColor = ("gray");

    rock_pile2 = createSprite(100, 105, 20, 20);
    rock_pile2.shapeColor = ("gray");

    rock_pile3 = createSprite(445, 55, 20, 20);
    rock_pile3.shapeColor = ("gray");

    rock_pile4 = createSprite(405, 390, 20, 20);
    rock_pile4.shapeColor = ("gray");

    rock_pile5 = createSprite(467, 245, 20, 20);
    rock_pile5.shapeColor = ("gray");
}

function refill_system() {
    if(player.isTouching(rock_pile)) {
        ammoCount = ammoCount + 5;
        rock_pile.remove()
    }

    if(player.isTouching(rock_pile2)) {
        ammoCount = ammoCount + 5;
        rock_pile2.remove()
    }

    if(player.isTouching(rock_pile3)) {
        ammoCount = ammoCount + 5;
        rock_pile3.remove()
    }

    if(player.isTouching(rock_pile4)) {
        ammoCount = ammoCount + 5;
        rock_pile4.remove()
    }

    if(player.isTouching(rock_pile5)) {
        ammoCount = ammoCount + 5;
        rock_pile5.remove()
    }
}

console.log("refill.js is working");