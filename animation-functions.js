function monsterShowUp() { // monster will show up in a random manner and duration   
    randomDuration();
    const bush = randomizeBushes(bushes);
    const monsterLaugh = new Audio('./assets/minionlaugh.mp3');
    const bushRustle = new Audio('./assets/rustleSound.mp3'); 
    
    bush.classList.add('appear'); //trigger for (.bush.appear .monster selector) monsters to appear
    monsterLaugh.play();
    bushRustle.play();
    
    setTimeout(function(){
        bush.classList.remove('appear'); //monster will hide again once it reaches the duration
        
        if(!timeIsUp){ //if time is not yet up, monsters will keep showing up
            monsterShowUp()
        };
    }, duration);
}

function enlargeScoreUp() { //enlarge the score display
    scoreDisplay.style.transform = 'scale(1.5)';
    scoreDisplay.style.transition = '0.01s';
}

function shrinkScoreUp() { //shrink the score dislplay
    scoreDisplay.style.transform = 'scale(1)';
    scoreDisplay.style.transition = '0.15s';
}

function animateScoreUp() { // animate the score display when the player scores
    enlargeScoreUp();

    setTimeout (() => {
        shrinkScoreUp();
    }, 25);
}

function enlargeStartCount() { //enlarge the countdown dialogue    
    overlayDialogue.style.transform = 'scale(1.4)';
    overlayDialogue.style.transition = '0.05s';
}

function shrinkStartCount() { //shrink the countdown dialogue
    overlayDialogue.style.transform = 'scale(1)';
    overlayDialogue.style.transition = '0.5s';
}

function animateStartCount() { // animate the score display when the player scores
    enlargeStartCount();
    setTimeout (() => {
        shrinkStartCount();
    }, 50);
}

function awesomeStartCount() { // improved version of animateStartCount function
    enableOverlayDialogue();
    animateStartCount();
    overlayDialogue.style.fontSize = '100px';
    overlayDialogue.style.top = '30%';
    overlayDialogue.style.left = '44%';

    setTimeout(() => {
        disableOverlayDialogue();
    }, 500);
}

function enlargeTimer() { //enlarge the timer display
    timerDisplay.style.transform = 'scale(1.1)';
    timerDisplay.style.transition = '0.025s';
}

function shrinkTimer() { //shrink the timer dislplay
    timerDisplay.style.transform = 'scale(1)';
    timerDisplay.style.transition = '0.25s';
}

function animateTimer() { // animate the timer display
    enlargeTimer();

    setTimeout (() => {
        shrinkTimer();
    }, 250);

    setTimeout (() => {
        enlargeTimer();
    }, 500);

    setTimeout (() => {
        shrinkTimer();
    }, 750);
}

function reddenTimer() { //change timer color to red color profile
    timerDisplay.style.color = 'rgb(245, 155, 155)';
    timerDisplay.style.border = '20px solid rgb(133, 2, 2)';
    timerDisplay.style.backgroundColor = 'rgb(255, 0, 0)';
}

function unReddenTimer() { // revert timer to default color profile
    timerDisplay.style.color = 'rgb(221, 221, 255)';
    timerDisplay.style.border = '20px solid rgb(57, 57, 175)';
    timerDisplay.style.backgroundColor = 'rgb(124, 124, 255)';
}

function alertTimer() {  // color timer switches back and forth between red to default
    reddenTimer();
    setTimeout(function() {
        unReddenTimer();
    }, 500);
}

function bloodSplat(element) { // blood animation after a monster was shot
    playGoreSound();
    element.style.backgroundImage = bloodSplatAnimation;
    element.style.pointerEvents = 'none';

    setTimeout(function() {
        element.style.backgroundImage = 'url(./assets/monster.png)';
        element.style.pointerEvents = 'all';//mouse click is restored after the timeout 
    }, 750);    
} 

function smokePoof(element) { // smoke animation after a monster was shot
    playSmokePoof(); 
    element.style.backgroundImage = smokePoofAnimation;
    element.style.pointerEvents = 'none';

    setTimeout(function() {
        element.style.backgroundImage = 'url(./assets/monster.png)';
        element.style.pointerEvents = 'all';
    }, 750);
}
