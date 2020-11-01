$(document).ready(function(){
    $('.community__slider').slick({  
        slidesToShow: 2,  
        slidesToScroll: 1, 
        responsive: [
            
            {breakpoint: 430,
            settings: {slidesToShow: 1}}
          ] })
  });
