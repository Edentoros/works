var navbar = document.querySelector(".navigation");
var ham = document.querySelector(".nav__burger");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("open")
 
};

ham.addEventListener("click", toggleHamburger);

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".navigation__menu-item");
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
);
