$(document).ready(function() {
	function fixedHeaderControll() {
	        if( window.pageYOffset > ($('header.main-header').offset().top - 72)+  $('header.main-header').innerHeight() && 
	        	window.pageYOffset + $(window).height() < $('footer').offset().top) {
	        	yy = 0;
	        } else {
	        	yy = -100;
	        }
	        $('.fixedHeader').css('top', yy);
	 }

	document.onscroll = fixedHeaderControll;
	fixedHeaderControll();

	// плавный скролл
	$("a.programs-comparison").click(function () {
	    let elementClick = $(this).attr("href");
	    let destination = $(elementClick).offset().top;
	    $('html, body').stop().animate({ scrollTop: destination }, 600);
	    return false;
	});

	
	$("ul.header__menu a").click(function () {
	    let elementClick = $(this).attr("href");
	    let destination = $(elementClick).offset().top;
	    $('html, body').stop().animate({ scrollTop: destination }, 600);
	    return false;
	});

	
	$("ul.header__menu li.li a").click(function () {
	    let elementClick = $(this).attr("href");
	    let destination = $(elementClick).offset().top;
	    $('html, body').stop().animate({ scrollTop: destination }, 600);
	    return false;
	});

	// плавный скролл
	$("ul.header__menu li:first-child a").click(function () {
	    let elementClick = $(this).attr("href");
	    let destination = ($(elementClick).offset().top - 100);
	    $('html, body').stop().animate({ scrollTop: destination }, 600);
	    return false;
	});

	
	



	$('section.myths .myths__button button').click(function(event) {
		event.preventDefault();
		$(".myth.hidden").each(function(index, el) {
			if(!index) {
				$(this).slideDown({
				  start: function () {
				    $(this).css({
				      display: "flex"
				    })
				  }
				});
				$(this).removeClass('hidden');
			}
			if (!$('div').is('.hidden')) {
				$('section.myths .myths__button').hide();
			}
		});
	});

	$('a.researches-list').click(function(event) {
		event.preventDefault();
		$(this).siblings('ul.submenu').slideToggle(500);
	});
});