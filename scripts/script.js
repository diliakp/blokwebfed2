// JavaScript Document
console.log("hi");


// section foto's laten scrollen horizontaal
// var scrollContainer = document.querySelector('.home article:nth-of-type(1) section:nth-of-type(2)');
// var buttonLeft = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(1)');
// var buttonRight = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(2)');


// if(buttonLeft == 0){
//     buttonLeft.addEventListener('click', function(){
//         scrollContainer.scrollLeft -= 350;
//     });
    
//     buttonRight.addEventListener('click', function(){
//         scrollContainer.scrollLeft += 350;
//     });    
// }else{

// }

var scrollContainer = document.querySelector('.home article:nth-of-type(1) section:nth-of-type(2)');
var buttonLeft = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(1)');
var buttonRight = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(2)');

var shouldAddEventListeners = true; 

if (shouldAddEventListeners) {
    buttonLeft.addEventListener('click', function(){
        scrollContainer.scrollLeft -= 350;
    });

    buttonRight.addEventListener('click', function(){
        scrollContainer.scrollLeft += 350;
    });
} else {
   
}



// hamburgermenu openen en sluiten
var menuButton = document.querySelector('header div button:nth-of-type(1)');
var kruisje = document.querySelector('header div button:nth-of-type(2)');
var heleNav = document.querySelector('header div nav');

heleNav.classList.add('hidden');
kruisje.classList.add('hidden');

function openMenu() {
    heleNav.classList.remove('hidden');
    menuButton.classList.add('hidden');
    kruisje.classList.remove('hidden');
}

function closeMenu() {
    heleNav.classList.add('hidden');
    menuButton.classList.remove('hidden');
    kruisje.classList.add('hidden');
}

menuButton.addEventListener("click", openMenu);
kruisje.addEventListener("click", closeMenu);


// section tevoorschijn laten komen na het drukken op een knop
var bestelContainer = document.querySelector('.home section:nth-of-type(1) article:nth-of-type(3)');
var buttonAfhalen = document.querySelector('.home section:nth-of-type(1) article:nth-of-type(2) section button:nth-child(2)');
var buttonTerug = document.querySelector('.home section:nth-of-type(1) article:nth-of-type(3) section img');


buttonAfhalen.addEventListener('click', function(){
    if (bestelContainer.classList.contains('hidden')) {
        bestelContainer.classList.remove('hidden'); 
    }
});


buttonTerug.addEventListener('click', function(){
    if (!bestelContainer.classList.contains('hidden')) {
        bestelContainer.classList.add('hidden'); 
    }
});



// dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    approvedSound();
 }

 var darkModeToggle = document.querySelector('header div img:nth-of-type(1)');
 darkModeToggle.addEventListener('click', toggleDarkMode);


//  https://pixabay.com/sound-effects/search/sparkle/

 function approvedSound() {
    var audio = new Audio('audios/sound-effect-twinklesparkle-115095.mp3');
    audio.play();
}

// rotating image

// Get the rotating image element
var rotatingImage = document.querySelector(".whitemode");

var rotationDegree = 0;

rotatingImage.addEventListener("click", () => {
    rotationDegree += 180;
    
    rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
});