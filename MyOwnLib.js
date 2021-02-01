function isTouching(p1, p2) {
    if (p1.x - p2.x < p2.width/2 + p1.width/2
        && p2.x - p1.x < p2.width/2 + p1.width/2
        && p1.y - p2.y < p2.height/2 + p1.height/2
        && p2.y - p1.y < p2.height/2 + p1.height/2) {
            return true
        } else {
            return false
        }
    }

function bounceOffBox(a1, a2) {
    if (a1.x - a2.x < a2.width/2 + a1.width/2
        && a2.x - a1.x < a2.width/2 + a1.width/2) {
      a1.velocityX = a1.velocityX * (-1);
      a2.velocityX = a2.velocityX * (-1);
    }
    if (a1.y - a2.y < a2.height/2 + a1.height/2
      && a2.y - a1.y < a2.height/2 + a1.height/2){
      a1.velocityY = a1.velocityY * (-1);
      a2.velocityY = a2.velocityY * (-1);
    }

}
