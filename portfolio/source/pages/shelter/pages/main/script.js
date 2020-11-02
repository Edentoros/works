$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    
  }),
  $('.friends__cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {breakpoint: 1024,
      settings: {slidesToShow: 2}},
      {breakpoint: 770,
      settings: {slidesToShow: 1}}
    ]
  })
});

var navbar = document.querySelector(".navigation");
var ham = document.querySelector(".nav__burger");

function toggleHamburger(){
  navbar.classList.toggle("open")
 ham.classList.toggle("open")
 if (ham.classList.contains('open')) {document.body.style.position = 'fixed'}
 else {document.body.style.position = 'static'}
 

};

ham.addEventListener("click", toggleHamburger);


var menuLinks = document.querySelectorAll(".navigation__menu-item");
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
);

let width = window.outerWidth;
const slider = document.querySelector('.help__content')
console.log(width);
  if (width < 480) {
    slider.classList.toggle('slider')
    
  };
  
 