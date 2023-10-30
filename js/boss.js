var michael;

var michaelRadius;

var michaelSide = 1;
var michaelLeft = 1;
var michaelRight = 2;

var michaelPosition = 0;
var michaelYD = 1;
var michaelXL = 2;
var michaelYU = 3;
var michaelXR = 4;

var michaelHealth = 500;
var michaelSpeed = 2;
var michaelFriction = 5;
var michaelDamage = 10;

var mikes_rocks;
var mikes_rocks_group;

var michaelState = 0;
var idle = 0;
var moving = 1;
var sweep = 2;
var attacking = 3;

var non_attack = true;

var attackState = 0;
var windup = 0;
var attack_left = 1;
var attack_right = 2;

var michaelBonus = 0;

var michaelHealthBar;

var kick_box;

var stateChange;

function michaelSetup() {
    if(sceneState === 3) {
        michael = createSprite(245, 40, 50, 50);
        michael.scale = (2.0);

        michaelHealthBar = createSprite(michael.x, michael.y-80, michaelHealth/3, 10);
        michaelHealthBar.shapeColor = ("red");

        michaelRadius = createSprite(michael.x, michael.y, 1, 1);
        michaelRadius.setCollider("circle", 0, 0, 500);
        michaelRadius.visible = false;

        mikes_rocks_group = createGroup();
        //michael.friction = michaelFriction;
    }
}

function michaelDraw() {
    if(sceneState === 3) {
        michaelRadius.x = michael.x;
        michaelRadius.y = michael.y;

        michaelHealthBar.x = michael.x;
        michaelHealthBar.y = michael.y-80;
        michaelHealthBar.width = michaelHealth/3;

        if(frameCount % 20 === 0) {
            if(non_attack === true) {
                stateChange = Math.round(random(1,10));
            }else {
                console.log("attack in progress");
            }
        }

        if(stateChange >= 1 && stateChange <= 5) {
            michaelState = moving;
        }else if(stateChange >= 6 && stateChange <= 9) {
            michaelState = idle;
        }else if(stateChange === 10) {
            michaelState = attacking;
        }

        if(michaelState === idle) {
            michael.velocityX = 0;
            michael.velocityY = 0;
            michael.changeAnimation("idle");

            if(frameCount % 70 === 0) {
                mikes_rocks = createSprite(michael.x, michael.y, 50, 50);
                mikes_rocks.addImage("rocks", rocks_img);
                mikes_rocks.attractionPoint(10, player.position.x, player.position.y);
                
                mikes_rocks_group.add(mikes_rocks)
            }
            //Michael's scream
        }else if(michaelState === moving) {
            if(player.x > michael.x){
                michael.velocityX = michaelSpeed;
            }else if(player.x < michael.x){
                michael.velocityX = -michaelSpeed;
            }

            if(player.y > michael.y){
                michael.velocityY = michaelSpeed;
            }else if(player.y < michael.y){
                michael.velocityY = -michaelSpeed;
            }


            if(michael.velocityX > 0 && michael.velocityX > michael.velocityY) {
                michaelPosition = michaelXR;
            }else if(michael.velocityY > 0 && michael.velocityY > michael.velocityX) {
                michaelPosition = michaelYD;
            }else if(michael.velocityX < 0 && michael.velocityX < michael.velocityY) {
                michaelPosition = michaelXL;
            }else if(michael.velocityY < 0 && michael.velocityY < michael.velocityX) {
                michaelPosition = michaelYU;
            }

            if(michael.velocityX > 0) {
                michaelSide = michaelRight;
            }else {
                michaelSide = michaelLeft;
            }

            if(michaelPosition === michaelYD) {
                michael.changeAnimation("walk4");
            }else if(michaelPosition === michaelYU) {
                michael.changeAnimation("walk3");
            }else if(michaelPosition === michaelXL) {
                michael.changeAnimation("walk1");
            }else if(michaelPosition === michaelXR) {
                michael.changeAnimation("walk2");
            }

            if(player.isTouching(michaelRadius)) {
                michaelState = sweep;
            }else {
                michaelState = walking;
            }
        }else if(michaelState === sweep){
            non_attack = false;
            if(michaelSide === michaelRight) {
                michael.changeAnimation("right windup");
            }else if(michaelSide === michaelLeft) {
                michael.changeAnimation("left windup");
            }

            if(player.isTouching(michael)) {
                playerHealth -= 20;
            }
        }else if(michaelState === attacking) {
            non_attack = false;
            attackState = windup;

            if(attackState === windup){
                if(michaelSide === michaelLeft) {
                    michael.changeAnimation("windup1");
                    michael.changeImage("windup_still1");
                }else if(michaelSide === michaelLeft) {
                    michael.changeAnimation("windup2");
                    michael.changeImage("windup_still2");
                }

                if(frameCount % 12 === 0) {
                    if(side === right) {
                        michael.x = player.x-80;
                        michael.y = player.y;
                        attackState = attack_left;
                    }else if(side === left) {
                        michael.x = player.x+80;
                        michael.y = player.y;
                        attackState = attack_left;
                    }
                }
            }

            if(attackState === attack_left){
                michael.changeAnimation("left attack");
                kick_box = createSprite(michael.x-70, michael.y, 32, 64);
                if(player.isTouching(kick_box)) {
                    healthCount -= 9;
                    player.velocityX-10;
                    healthBar.visible = true;
                }
                kick_box.destroy();
            }

            if(attackState === attack_right) {
                michael.changeAnimation("right attack");
                kick_box = createSprite(michael.x-70, michael.y, 32, 64);
                if(player.isTouching(kick_box)) {
                    healthCount -= 9;
                    player.velocityX+10;
                    healthBar.visible = true;
                }
                kick_box.destroy();
            }

            setTimeout(backUp, 1000)
        }

        if(player.isTouching(mikes_rocks_group)) {
            mikes_rocks_group.destroyEach();
            healthCount -= 15;
        }
    }
}

function backUp() {
    non_attack = true;
    stateChange = 1;
}