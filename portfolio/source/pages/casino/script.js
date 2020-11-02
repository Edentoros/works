var navbar = document.querySelector(".games__navigation");
var ham = document.querySelector(".header__burger-button");

function toggleHamburger(){
  navbar.classList.toggle("open")
 ham.classList.toggle("open")
 
};

ham.addEventListener("click", toggleHamburger);


var menuLinks = document.querySelectorAll(".navigation__menu-item");
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
);