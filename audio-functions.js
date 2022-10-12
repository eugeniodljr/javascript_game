function bindPewPew(){ //bind mouseclick with attack sound effect 
    const laserShot1Sound = new Audio('./assets/pewpew1.mp3');
    const laserShot2Sound = new Audio('./assets/pewpew2.mp3');
    laserShot1Sound.play();
    laserShot2Sound.play();
}

function playGameMusic() {    // Intro and outro music    
    backgroundSound.play();
    backgroundSound.loop = true;
}

function stopGameMusic() {
    backgroundSound.pause();
    backgroundSound.currentTime = 0; //set playback to 0s
}

function playInGameSound() { // In-game music
    inGameSound.play();
    inGameSound.loop = true;
}

function stopInGameSound() {
    inGameSound.pause();
    inGameSound.currentTime = 0;
}

function playTimerSound() {
    timerSound.play();
    timerSound.loop = 0;
}

function stopTimerSound() {
    timerSound.pause();
    timerSound.currentTime = 0;
}

function playTickingSound() { //tick sound effect
    tickingSound.play();
}

function stopTickingSound() {
    tickingSound.pause();
    tickingSound.currentTime = 0;
}

function playRollOverSound() { //hover sound effect
    rollOverSound.play();
}

function playButtonSound() {
    buttonSound.play();
}

function quickTickingSounds() { // fast ticking sounds right after clicking for the first time
    overlayGreeting.textContent = 'Please wait for a moment'

    let countDown = setInterval (function(){  //tick sounds before the music plays
        playTickingSound();
    }, 500);
    
    setTimeout(() => { // set ticking sound duration to 3secs
        clearInterval(countDown);
    }, 3000);
}

function playGoreSound() {
    const goreSound = new Audio('./assets/gorySound.mp3');
    goreSound.play();
}

function playSmokePoof() {
    const poofSound = new Audio('./assets/poof.mp3');   
    poofSound.play();
}