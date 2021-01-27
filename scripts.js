var shadowPosX = 0;
var shadowPosY = 0;
function loadingDone(){
    var shadowInterval = setInterval(function(){
        shadowPosX -= .5;
        shadowPosY += .5;
        document.querySelector("h1").style.textShadow = shadowPosX + "px " + shadowPosY + "px lightgray";
        if(shadowPosX == -23 && shadowPosY == 23){
        clearInterval(shadowInterval);
        }
    }, 80);
}