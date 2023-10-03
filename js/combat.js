var ammo;
var ammoCount = 5;
var round;

function combatSystem() {
    if(ammoCount > 0) {
        if(keyDown("enter")) {
            if(frameCount % 10 === 0) {
                if(playerP_state === YU) {
                    round = createSprite(player.x, player.y, 10, 10);
                    round.velocityY =-20;
                }
        
                if(playerP_state === XL) {
                    round = createSprite(player.x, player.y, 10, 10);
                    round.velocityX = -20;
                }
        
                if(playerP_state === YD) {
                    round = createSprite(player.x, player.y, 10, 10);
                    round.velocityY = 20;
                }
        
                if(playerP_state === XR) {
                    round = createSprite(player.x, player.y, 10, 10);
                    round.velocityX = 20;
                }
    
                ammoCount -= 1;
            }
        }
    }
}

console.log("combat.js is working");