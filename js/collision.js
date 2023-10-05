function collisionDraw() {
    if(enemy.isTouching(fy_edges)) {
        enemy.collide(fy_edges);
    }

    if(player.isTouching(front_yard_map)) {
        console.log("on map");
    }else {
        console.log("not on map");
        player.x = 200;
        player.y = 200;
    }
}

console.log("collision.js is working");