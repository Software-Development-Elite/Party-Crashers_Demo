var sceneState = 1;
var level1 = 1;
var level2 = 2;
var level3 = 3;

var front_yard_map;
var fy_top, fy_left, fy_right, fy_bottom;
var fy_edges;

function sceneSetup() {
    front_yard();
    first_floor();
    second_floor();
}

function front_yard() {
    if(sceneState === level1) {
        front_yard_map = createSprite(200, 200, 300, 300);
        front_yard_map.shapeColor = ("blue");

        fy_top = createSprite(front_yard_map.x, front_yard_map.y-150, front_yard_map.width, 10);
        fy_left = createSprite(front_yard_map.x-150, front_yard_map.y, 10, front_yard_map.height);
        fy_right = createSprite(front_yard_map.x+150, front_yard_map.y, 10, front_yard_map.width);
        fy_bottom = createSprite(front_yard_map.x, front_yard_map.y+150, front_yard_map.width, 10);

        fy_edges = createGroup()

        fy_edges.add(fy_top);
        fy_edges.add(fy_left);
        fy_edges.add(fy_right);
        fy_edges.add(fy_bottom);

        refill_setup();
    }
}

function first_floor() {
    if(sceneState === level2) {}
}

function second_floor() {
    if(sceneState === level3) {}
}

function fy_draw() {
    if(sceneState === 1){
        player.collide(fy_edges);
    }
}

console.log("scene.js is working");