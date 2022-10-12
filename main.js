const frame = document.querySelector('.frame');
const scoreDisplay = document.querySelector('.score');
const timerDisplay = document.getElementById('timer');
const bushes = document.querySelectorAll('.bush');

//UI & buttons
const overlayGreeting = document.getElementById('overlay-greeting');  
const overlayMenu = document.getElementById('overlay-menu'); 
const overlayOptions = document.getElementById('overlay-options'); 
const overlayAbout = document.getElementById('overlay-about'); 
const overlayDialogue = document.getElementById('overlay-dialogue'); 
const overlayGameover = document.getElementById('overlay-gameover'); 
const overlayQuit = document.getElementById('overlay-quit');
 
//audio
const backgroundSound = new Audio('./assets/WigglingBaby.mp3');
const timerSound = new Audio('./assets/timer.mp3');
const cheeringSound = new Audio('./assets/kidsYay.mp3');
const countGo = new Audio('./assets/54321.mp3');
const monsterLaugh = new Audio('./assets/minionLaugh.mp3');
const tickingSound = new Audio('./assets/ticking.mp3')
const inGameSound = new Audio('./assets/happyTreeFriends.mp3');
const byeSound = new Audio('./assets/byeBye.mp3');
const laughingSound = new Audio('./assets/childrenLaughing.mp3');
const gameOverSound = new Audio('./assets/aww.mp3');
const minionGameOverSound = new Audio('./assets/ohNoGameOver.mp3');
const giggleSound = new Audio('./assets/kidGiggle.mp3');
const buttonSound = new Audio('./assets/start.mp3');
const rollOverSound = new Audio('./assets/rollOver.mp3');
const yaySound = new Audio('./assets/yay.mp3');
const airHornSound = new Audio('./assets/airHorn.mp3');

//radio inputs under options menu
const difficultyNormal = document.getElementById('difficulty-normal');
const difficultyAbnormal = document.getElementById('difficulty-abnormal');
const timeLimit25 = document.getElementById('time-limit-25');
const timeLimit35 = document.getElementById('time-limit-35');
const crosshairRedDot = document.getElementById('red-dot');
const crosshairGreen = document.getElementById('green');
const crosshairRed = document.getElementById('red');
const crosshairPredator = document.getElementById('predator');
const damageEffectBloodSplat = document.getElementById('blood-splat');
const damageEffectSmokePoof = document.getElementById('smoke-poof');

//animations
const smokePoofAnimation = 'url(./assets/smokeEffect.gif)';
const bloodSplatAnimation = 'url(./assets/bloodSplat.mp4)';

let timeLimit;
let countDown;
let timeIsUp = false;
let score = 0;
let previousBush; // to identify the last recent random bush; to be used in randomizeBushes function
let endScore = document.getElementById('end-score');
let duration; //a variable for appearance duration under game difficulty

////////////////////////////////////////window onload///////////////////////////////////////
enableOverlayGreeting(); // enable uiGreeting on load
difficultyNormal.checked = true; // set default difficulty to normal
timeLimit25.checked = true;      // set default time limit to 25 secs
crosshairRedDot.checked = true;  // set default crosshair to red-dotted crosshair  
damageEffectSmokePoof.checked = true; // set default monster visual effect to smoke poof
frame.style.cursor = 'url(./assets/gloveCursor.png), auto';//change default cursor to custom cursor

//--------------------------------start game-------------------------------------//
function gameStart(){  
    setTimeLimit();
    score = 0;
    buttonPlay.removeEventListener('click', playGameMusic);
    timeIsUp = false;
    countDown = timeLimit / 1000; //convert unit from millisecond to second
    enableScoreDisplay();
    enableTimerDisplay();
    monsterShowUp();
    playInGameSound();
    frame.addEventListener('click', bindPewPew); // bind attack with attack sound effects

    setTimeout(function(){  // timeout for the time limit
        timeIsUp = true;
    }, timeLimit);
    
    let beginCountDown = setInterval(function(){ //set an interval of 1 sec for the countdown  
        countDown -= 1;
        timerDisplay.textContent = countDown;
        
        if (countDown <= 10) {
            playTimerSound();
            alertTimer();
        }
        
        if (countDown <= 6) {
            setInterval(playTickingSound(), 1000);         
            animateTimer();
        }
        
        if (countDown < 0) {
            countDown = 0; //prevents countDown from counting negative numbers
            clearInterval(beginCountDown); //stops the countDown      
            stopTimerSound();
            stopInGameSound();
            playGameMusic();
            airHornSound.play();
            
            setTimeout(function() {
                minionGameOverSound.play();
            }, 1500);
            
            setTimeout(function() {
                gameOverSound.play();
            }, 2950);
            
            disableScoreDisplay();
            disableTimerDisplay();
            frame.style.cursor = 'url(./assets/gloveCursor.png), auto';// reverts mouse to glove cursor
            frame.removeEventListener('click', bindPewPew);
            
            setTimeout(function(){
                laughingSound.play();
            }, 5000);
            
            setTimeout(function(){
                giggleSound.play();
            }, 6000);
            
            enableOverlayGameover();

            function printScore() {
                endScore.style.fontSize = '8vw';
                endScore.style.color = 'white';
                endScore.textContent = `${score}`;
            }
            
            printScore();
            document.addEventListener('click', backToMenu);          
            buttonPlay.style.pointerEvents = 'all' //brings back startButton function
            buttonPlay.textContent = 'PLAY AGAIN';
        }        
    }, 1000)
}




