// This file includes the counting score function,
// gamestart-delay function and random position function

// returns a random bush
function randomizeBushes(bushes){ 
    const randomBush = Math.floor(Math.random() * bushes.length);
    const bush = bushes[randomBush];
    
    if(bush == previousBush){ //whenever new random bush repeats(or equals the previous bush)
        randomizeBushes(bushes); //keeps repeating until condition is met
    }
    
    previousBush = bush; //labels the new random bush as the previous bush
    return bush;
}

function countScore() {
    score++;
    scoreDisplay.textContent = score;
    animateScoreUp();
}

// delays the actual start of the game
function gameDelay(){ 
    playButtonSound();
    stopGameMusic();
    disableOverlayMenu();
    changeCrosshair();  
    
    // 'READY' dialogue
    enableOverlayDialogue();
    overlayDialogue.textContent = 'READY';
    overlayDialogue.style.fontSize = '4vw';
    overlayDialogue.style.height = '25%';
    overlayDialogue.style.top = '30%';
    overlayDialogue.style.left = '41%';
    cheeringSound.play();
    
    setTimeout(function() { 
        disableOverlayDialogue();
    }, 1000);
    
    //countdown dialogue with animation
    setTimeout(function() {
        awesomeStartCount();
        overlayDialogue.textContent = '5';
        overlayDialogue.style.fontSize = '7vw';
        countGo.play();
    }, 2000);
    
    setTimeout(function() {
        awesomeStartCount();
        overlayDialogue.textContent = '4';
        overlayDialogue.style.fontSize = '7vw';
    }, 3000);
    
    setTimeout(function() {
        awesomeStartCount();
        overlayDialogue.textContent = '3';
        overlayDialogue.style.fontSize = '7vw';
    }, 4000);
    
    setTimeout(function() {
        awesomeStartCount();
        overlayDialogue.textContent = '2';
        overlayDialogue.style.fontSize = '7vw';
    }, 5000);
    
    setTimeout(function() {
        awesomeStartCount();
        overlayDialogue.textContent = '1';
        overlayDialogue.style.fontSize = '7vw';
    }, 6000);
    
    buttonPlay.style.pointerEvents = 'none'; // prevents spamming of play button which breaks the game 
    
    setTimeout(function(){ // sets a delay on play button instead of instantaneous for a smoother UIx
        disableOverlayDialogue();
        yaySound.play();
        gameStart();
    }, 7000);
}
