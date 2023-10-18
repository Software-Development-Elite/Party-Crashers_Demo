var sceneState = 1;
var level1 = 1;
var level2 = 2;
var level3 = 3;
var front_yard_map;
var fy_top, fy_left, fy_right, fy_bottom;
var fy_edges;
var fy_wall1;
var fy_wall2;
var fy_wall3;
var fy_wall4;
var fy_walls;

function sceneSetup() {
    front_yard();
    first_floor();
    second_floor();
}

function front_yard() {
    if(sceneState === level1) {
        front_yard_map = createSprite(200, 200, 1000, 600);
        front_yard_map.shapeColor = ("blue");

        fy_top = createSprite(front_yard_map.x, front_yard_map.y-300, front_yard_map.width, 10);
        fy_top.visible=false;
        fy_left = createSprite(front_yard_map.x-500, front_yard_map.y, 10, front_yard_map.height);
        fy_left.visible=false;
        fy_right = createSprite(front_yard_map.x+500, front_yard_map.y, 10, front_yard_map.height);
        fy_right.visible=false;
        fy_bottom = createSprite(front_yard_map.x, front_yard_map.y+285, front_yard_map.width, 10);
        fy_bottom.visible=false;

        fy_wall1 = createSprite(front_yard_map.x-80, front_yard_map.y+15, 60, 170);
        fy_wall1.visible = false;

        fy_wall2 = createSprite(520, 140, 360, 30);
        fy_wall2.visible = false;

        fy_wall3 = createSprite(-170, 190, 250, 5);
        fy_wall3.visible = false;

        fy_wall4 = createSprite(520, 295, 350, 20);
        fy_wall4.visible = false;

        fy_edges = createGroup()

        fy_edges.add(fy_top);
        fy_edges.add(fy_left);
        fy_edges.add(fy_right);
        fy_edges.add(fy_bottom);

        fy_walls = createGroup();
        
        fy_walls.add(fy_wall1);
        fy_walls.add(fy_wall2);
        fy_walls.add(fy_wall3);
        fy_walls.add(fy_wall4);

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
        player.collide(fy_walls);
    }
}

console.log("scene.js is working");