// JavaScript Document
console.log("hi");


// section foto's laten scrollen horizontaal
var scrollContainer = document.querySelector('.home article:nth-of-type(1) section:nth-of-type(2)');
var buttonLeft = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(1)');
var buttonRight = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(2)');


if(buttonLeft == 0){
    buttonLeft.addEventListener('click', function(){
        scrollContainer.scrollLeft -= 350;
    });
    
    buttonRight.addEventListener('click', function(){
        scrollContainer.scrollLeft += 350;
    });    
}else{

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
var buttonTerug = document.querySelector('.home section:nth-of-type(1) article:nth-of-type(3) section img')



if(buttonAfhalen == 0){
    bestelContainer.classList.toggle('hidden');

    buttonAfhalen.addEventListener('click', function(){
        bestelContainer.classList.toggle('hidden');
    });
    
    buttonTerug.addEventListener('click', function(){
        bestelContainer.classList.toggle('show');
    });
    
}else{

}


// dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
 }

 var darkModeToggle = document.querySelector('header div img:nth-of-type(1)');
 darkModeToggle.addEventListener('click', toggleDarkMode);

   



// var homepage = document.querySelector('.home')
// var pagina2 = document.querySelector('.page2')
// if(homepage !== undefined){
//     function toggleDarkMode() {
//         var body = document.body;
//         body.classList.toggle('dark-mode');
//      }

//     var darkModeToggle = document.querySelector('.home section:nth-of-type(1) article:nth-of-type(1) img:nth-of-type(1)');
//     darkModeToggle.addEventListener('click', toggleDarkMode);
// }else if(pagina2 !== undefined){
//     function toggleDarkMode2() {
//         var body = document.body;
//         body.classList.toggle('dark-mode');
//      }

//     var darkModeToggle2 = document.querySelector('.page2 section:nth-of-type(1) img:nth-of-type(1)');
//     darkModeToggle2.addEventListener('click', toggleDarkMode2);
// }else{

// }
