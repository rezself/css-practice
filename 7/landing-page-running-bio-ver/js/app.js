document.querySelector(".navigation__mobile").addEventListener("click", animateBars);

var line1__navigation = document.querySelector(".line1__navigation");
var line2__navigation = document.querySelector(".line2__navigation");
var line3__navigation = document.querySelector(".line3__navigation");
var container__menu = document.querySelector(".menu");

function animateBars() {
    line1__navigation.classList.toggle("activeline1__navigation");
    line2__navigation.classList.toggle("activeline2__navigation");
    line3__navigation.classList.toggle("activeline3__navigation");

    container__menu.classList.toggle("menu__active");
}