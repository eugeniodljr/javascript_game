//constants are placed here to prevent undefined calls from functions
const monsters = document.querySelectorAll('.monster');
const buttonPlay = document.querySelector('.button-play');
const buttonOptions = document.querySelector('.button-options'); 
const buttonAbout = document.querySelector('.button-about'); 
const buttonQuit1 = document.querySelector('.button-quit1'); 
const buttonBack1 = document.querySelector('.button-back1'); 
const buttonBack2 = document.querySelector('.button-back2'); 
const buttonBack3 = document.querySelector('.button-back3'); 
const buttonQuit2 = document.querySelector('.button-quit2');
const buttons = document.querySelectorAll('.button');
const optionsRadio = document.querySelectorAll('.options-radio');
const buttonFullscreen = document.getElementById('fullscreen-toggle');


buttonPlay.addEventListener('click', gameDelay); //play button
buttonOptions.addEventListener('click', showOptions);
document.addEventListener('click', firstClick);
buttonAbout.addEventListener('click', showAbout);
buttonQuit1.addEventListener('click', quitMenu);
buttonBack1.addEventListener('click', backToMenu);
buttonBack2.addEventListener('click', backToMenu);
buttonBack3.addEventListener('click', backToMenu);
buttonQuit2.addEventListener('click', quitGame);
buttonFullscreen.addEventListener('click', toggleFullscreen);

// for multiple button listener with hover function
for (let i=0; i < buttons.length; i++) { 
    buttons[i].addEventListener('mouseover', playRollOverSound);
}

// for multiple radio input listener with hover function
for (let i=0; i < optionsRadio.length; i++) { 
    optionsRadio[i].addEventListener('mouseover', playRollOverSound);
}

// for multiple radio input listener with click function
for (let i=0; i < optionsRadio.length; i++) { 
    optionsRadio[i].addEventListener('click', playButtonSound);
}

// for multiple radio input listener to change damage effects
for (let i=0; i < monsters.length; i++) { 
    monsters[i].addEventListener('click', changeDamageEffect); 
}

//for score binding after shooting a monster successfully
monsters.forEach(monster => monster.addEventListener('click', countScore));
