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

    if(player.isTouching(enemy2)) {
        enemy2.bounceOff(player);
        healthCount -= 2;
    }

    enemy2.bounceOff(fy_edges);
    enemy2.bounceOff(enemy);
}

console.log("collision.js is working");