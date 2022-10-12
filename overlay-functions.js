// Functions included here are menu/option/about/quit, score and timer UIs 

function enableTimerDisplay() {
    timerDisplay.style.display = 'block';
}

function disableTimerDisplay() {
    timerDisplay.style.display = 'none';
}

function enableScoreDisplay() {
    scoreDisplay.style.display = 'block';
}

function disableScoreDisplay() {
    scoreDisplay.style.display = 'none';
}

function enableOverlayGreeting() {   //greetings UI
    overlayGreeting.style.display = 'flex';
}

function disableOverlayGreeting() {
    overlayGreeting.style.display = 'none';
}

function enableOverlayMenu() { // play UI
    overlayMenu.style.display = 'flex';
}

function disableOverlayMenu() {
    overlayMenu.style.display = 'none';
}

function enableOverlayOptions() { // show options
    overlayOptions.style.display = 'flex';
}

function disableOverlayOptions() {
    overlayOptions.style.display = 'none';
}

function enableOverlayDialogue() { // dialogue boxes
    overlayDialogue.style.display = 'flex';
}

function disableOverlayDialogue() {
    overlayDialogue.style.display = 'none';
}

function enableOverlayAbout() { // about the game dialogue
    overlayAbout.style.display = 'flex';
}

function disableOverlayAbout() {
    overlayAbout.style.display = 'none';
}

function enableOverlayQuit() { // quit confirm dialogue
    overlayQuit.style.display = 'flex';
}

function disableOverlayQuit() {
    overlayQuit.style.display = 'none';
}

function enableOverlayGameover() { // game over dialogue
    overlayGameover.style.display = 'flex';
}

function disableOverlayGameover() {
    overlayGameover.style.display = 'none';
}

function showAbout() { // about game UI
    disableOverlayMenu();
    enableOverlayAbout();
    playButtonSound();
}

function showOptions() { // options UI
    playButtonSound();
    disableOverlayMenu();
    enableOverlayOptions();
}

function quitMenu() { // confirm quit UI
    playButtonSound();
    disableOverlayMenu();
    enableOverlayQuit();
}

function quitGame() {  // UI upon quitting the game
    playButtonSound();
    overlayQuit.textContent = 'THANK YOU FOR PLAYING!\nCLOSING THE GAME...';
    setTimeout(function() {
        byeSound.play();
    }, 1100);
    setTimeout(function() {
        window.location.href="https://www.google.com";
    }, 3000);
}

function firstClick() {  // goes to uiMenu after clicking the uiGreeting once    
    playButtonSound();
    frame.style.cursor = 'url(./assets/yellowStopwatch.png), auto'; // change custom cursor to loading cursor
    quickTickingSounds();
    
    setTimeout(function() { // 3 second delay before going to start button UI
        playGameMusic();
        disableOverlayGreeting();
        enableOverlayMenu();
        frame.style.cursor = 'url(./assets/gloveCursor.png), auto';// revert to custom cursor from loading cursor
    }, 3000);
    
    document.removeEventListener('click', firstClick); //prevent recurring tickingSounds()
}

function backToMenu() { // menu UI
    document.removeEventListener('click', backToMenu);
    playButtonSound();
    disableOverlayOptions();
    disableOverlayDialogue();
    disableOverlayAbout();
    disableOverlayQuit();
    disableOverlayGameover();
    enableOverlayMenu();
    buttonPlay.addEventListener('click', gameDelay); //play button
    buttonOptions.addEventListener('click', showOptions); // show options
    buttonAbout.addEventListener('click', showAbout); //about the game button
    buttonQuit1.addEventListener('click', quitMenu); //quit button
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
}
