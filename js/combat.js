var ammo;
var ammoCount = 5;
var round;
var roundGroup;

function combatSetup() {
    roundGroup = createGroup();
}

function combatSystem() {
    if(ammoCount > 0) {
        if(keyDown("enter")) {
            if(frameCount % 10 === 0) {
                if(playerP_state === YU) {
                    round = createSprite(player.x, player.y, 10, 10);
                    roundGroup.add(round);
                    round.addImage("rock", rock_img);
                    round.setCollider("rectangle",0,0,15,15);
                    round.velocityY =-20;
                }
        
                if(playerP_state === XL) {
                    round = createSprite(player.x, player.y, 10, 10);
                    roundGroup.add(round);
                    round.addImage("rock", rock_img);
                    round.setCollider("rectangle",0,0,15,15);
                    round.velocityX = -20;
                }
        
                if(playerP_state === YD) {
                    round = createSprite(player.x, player.y, 10, 10);
                    roundGroup.add(round);
                    round.addImage("rock", rock_img);
                    round.setCollider("rectangle",0,0,15,15);
                    round.velocityY = 20;
                }
        
                if(playerP_state === XR) {
                    round = createSprite(player.x, player.y, 10, 10);
                    roundGroup.add(round);
                    round.addImage("rock", rock_img);
                    round.setCollider("rectangle",0,0,15,15);
                    round.velocityX = 20;
                }
    
                ammoCount -= 1;
            }
        }
    }

    if(player.isTouching(enemy)) {
        if(playerP_state === YU){
            player.velocityY = 50;
        }else if(playerP_state === XR) {
            player.velocityX = -50;
        }else if(playerP_state === YD) {
            player.velocityY = -50;
        }else if(playerP_state === XL) {
            player.velocityX = 50;
        }
    }else {
        player.velocityX = 0;
        player.velocityY = 0;
    }

    if(enemy.isTouching(roundGroup)) {
        console.log("logPost");
        round.remove();
        enemyHealth -= 1;
    }
}

console.log("combat.js is working");