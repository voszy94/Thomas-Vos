/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/



/*Klikken hamburgermenu*/
var Hamburger = document.querySelector(".hamburger");
var Menu = document.querySelector(".menu");
function openklappen() {
    if (Menu.style.display === "none") {
        Menu.style.display = "block";
    } else {
        Menu.style.display = "none";
    }
}
Hamburger.addEventListener('click', openklappen);



