var rock_pile;
var rock_pile2;
var rock_pile3;
var rock_pile4;
var rock_pile5;

var level2_sprite;
var level3_sprite;
var level2_available = false;
var can_get_level3 = false;
var level3_available = false;

var can_get_waterTool = false;
var wt_can_get_level1 = false;
var wt_level1_available = false;
var wt_level1_sprite;
var wt_can_get_level2 = false;
var wt_level2_available = false;
var wt_level2_sprite;
var wt_can_get_level3 = false;
var wt_level3_available = false;
var wt_level3_sprite;

var can_get_nothing1 = false;
var can_get_nothing2 = false;
var can_get_nothing3 = false;
var nothing_can_get_level1 = false;
var nothing_level1_available = false;
var nothing_level1_sprite;
var nothing_can_get_level2 = false;
var nothing_level2_available = false;
var nothing_level2_sprite;
var nothing_can_get_level3 = false;
var nothing_level3_available = false;
var nothing_level3_sprite;

function refill_setup() {
    if(sceneState === level1) {
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

    level2_sprite = createSprite(0,0,1,1);
    level2_sprite.visible = false;

    level3_sprite = createSprite(0,0,1,1);
    level3_sprite.visible = false;

    wt_level1_sprite = createSprite(0,0,1,1);
    wt_level1_sprite.visible = false;

    wt_level2_sprite = createSprite(0,0,1,1);
    wt_level2_sprite.visible = false;

    wt_level3_sprite = createSprite(0,0,1,1);
    wt_level3_sprite.visible = false;

    nothing_level1_sprite = createSprite(0,0,1,1);
    nothing_level1_sprite.visible = false;

    nothing_level2_sprite = createSprite(0,0,1,1);
    nothing_level2_sprite.visible = false;

    nothing_level3_sprite = createSprite(0,0,1,1);
    nothing_level3_sprite.visible = false;
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

    if(level2_available === true) {
        if(player.isTouching(level2_sprite)) {
            level2_sprite.remove();
            slingShot_level = 2;
        }
    }

    if(level3_available === true) {
        if(player.isTouching(level3_sprite)) {
            level3_sprite.remove();
            slingShot_level = 3;
        }
    }

    if(can_get_waterTool === true) {
        //tool_type = "Water Blaster";
    }

    if(wt_level1_available === true) {
        if(player.isTouching(wt_level1_sprite)) {
            wt_level1_sprite.remove();
            tool_type = "Water Blaster";
            waterTool_level = 1;
        }
    }

    if(can_get_nothing1 === true && can_get_nothing2 === true && can_get_nothing3 === true) {
        nothing_can_get_level1 = true;
    }

    if(nothing_level1_available === true) {
        if(player.isTouching(nothing_level1_sprite)) {
            nothing_level1_sprite.remove();
            tool_type = "Nothing Shooter";
            nothing_level = 1;
        }
    }
}

console.log("refill.js is working");