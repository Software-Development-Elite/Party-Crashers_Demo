var item;
var itemX
var itemY

function gui_setup() {
    item = createSprite(camera.x-900, camera.y-400, 50, 50);

    itemX = camera.x-400;
    itemY = camera.y-200;
}

function gui_draw() {
    itemX = camera.x-400;
    itemY = camera.y-200;
    item.x = itemX;
    item.y = itemY;
}
console.log("gui.js is working");