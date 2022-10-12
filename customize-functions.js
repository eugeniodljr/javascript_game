function randomDuration() { // for monster's random appearance duration radio inputs
    if (difficultyNormal.checked) {
        duration = Math.random() * 750 + 600;
        }
    
    else if(difficultyAbnormal.checked) {
        duration = Math.random() * 500 + 350;
    }
}

function setTimeLimit() { // for timelimit radio inputs    
    if (timeLimit25.checked) {
        timeLimit = 25000;
    }
    
    if (timeLimit35.checked) {
        timeLimit = 35000;
    }
}

function changeCrosshair() { // for crosshair radio inputs       
    if (crosshairRedDot.checked) {
        frame.style.cursor = 'url(./assets/redDotCrosshair.png), auto';    
    }
    
    else if (crosshairGreen.checked) {
        frame.style.cursor = 'url(./assets/greenCrosshair.png), auto';
    }
    
    else if (crosshairRed.checked) {
        frame.style.cursor = 'url(./assets/redCrosshair.png), auto';
    }

    else if (crosshairPredator.checked) {
        frame.style.cursor = 'url(./assets/predatorCrosshair.png), auto';
    }
}

function changeDamageEffect(event) { // for damage effects radio inputs
    if (damageEffectBloodSplat.checked){
        bloodSplat(event.target);
    }
    else if (damageEffectSmokePoof.checked) {
        smokePoof(event.target);
    }
}

