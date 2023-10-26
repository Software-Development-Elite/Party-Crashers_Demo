function collisionDraw() {
    if(sceneState === 1) {
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
        enemy2.bounceOff(fy_walls);
        enemy2.bounceOff(enemy);
    }
    if(sceneState === 2) {
        if(enemy.isTouching(f1_edges)) {
            enemy.collide(f1_edges);
        }
        if(player.isTouching(first_floor_map)) {
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
    
        enemy2.bounceOff(f1_edges);
        enemy2.bounceOff(enemy);
    }

    if(sceneState === 3) {
        if(enemy.isTouching(f2_edges)) {
            enemy.collide(f2_edges);
        }
        if(player.isTouching(second_floor_map)) {
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
    
        enemy2.bounceOff(f2_edges);
        enemy2.bounceOff(enemy);
    }
}

console.log("collision.js is working");