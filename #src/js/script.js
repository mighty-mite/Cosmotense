/*  @@include('alert.js')  */

let overlay = document.querySelector(".header__overlay")
let menu = document.querySelector(".header__nav");
// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

hamburger.onclick = function() {
menu.classList.toggle('header__nav-active');
overlay.classList.toggle('header__overlay-open');
};