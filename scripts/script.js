// JavaScript Document
console.log("hi");

var scrollContainer = document.querySelector('.home article:nth-of-type(1) section:nth-of-type(2)');

var buttonLeft = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(1)');

var buttonRight = document.querySelector('.home article:nth-of-type(1) button:nth-of-type(2)');



buttonLeft.addEventListener('click', function(){
    scrollContainer.scrollLeft -= 350;
})

buttonRight.addEventListener('click', function(){
    scrollContainer.scrollLeft += 350;
})