// JavaScript Document
console.log("hi");

// hamburgermenu openen en sluiten
var menuButton = document.querySelector('.hamburgermenu');
var kruisje = document.querySelector('.kruismenu');
var heleNav = document.querySelector('.helenav');

heleNav.classList.add('hidden');
kruisje.classList.add('hidden');

function openMenu() {
    console.log("openMenu is aangeroepen");
    heleNav.classList.remove('hidden');
    menuButton.classList.add('hidden');
    kruisje.classList.remove('hidden');
}

function closeMenu() {
    console.log("closeMenu is aangeroepen");
    heleNav.classList.add('hidden');
    menuButton.classList.remove('hidden');
    kruisje.classList.add('hidden');
}

menuButton.addEventListener("click", openMenu);
kruisje.addEventListener("click", closeMenu);


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
var rotatingImage = document.querySelector(".whitemode");
var rotationDegree = 0;

rotatingImage.addEventListener("click", () => {
    rotationDegree += 180;
    rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
});


// section tevoorschijn laten komen na het drukken op een knop
var bestelContainer = document.querySelector('.home main section:nth-of-type(1) article:nth-of-type(3)');
var buttonAfhalen = document.querySelector('.home main section:nth-of-type(1) article:nth-of-type(2) section button:nth-child(2)');
var buttonTerug = document.querySelector('.home main section:nth-of-type(1) article:nth-of-type(3) section img');


// sanne U THA MANNNN!!!!!
if (buttonAfhalen) {
    buttonAfhalen.addEventListener('click', function () {
        if (bestelContainer.classList.contains('hidden')) {
            bestelContainer.classList.remove('hidden');
        }
    });


    buttonTerug.addEventListener('click', function () {
        if (!bestelContainer.classList.contains('hidden')) {
            bestelContainer.classList.add('hidden');
        }
    });
}


// section foto's laten scrollen horizontaal
var scrollContainer = document.querySelector('.home main article:nth-of-type(1) section:nth-of-type(2)');
var buttonLeft = document.querySelector('.home main article:nth-of-type(1) button:nth-of-type(1)');
var buttonRight = document.querySelector('.home main article:nth-of-type(1) button:nth-of-type(2)');


if (buttonLeft) {
    buttonLeft.addEventListener('click', function () {
        scrollContainer.scrollLeft -= 350;
    });

    buttonRight.addEventListener('click', function () {
        scrollContainer.scrollLeft += 350;
    });
} else {

}