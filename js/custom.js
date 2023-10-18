$(document).ready(function(){
    //Top slider
    $('#top-slider').carousel({
        interval: 4000
    });
    //Promo slider
    $('#promo-slider').carousel({
        interval: 3000
    });
});

/* Odliczanie statystyki */
$('.timer').countTo();

/* Scroll dla slidera */
var s = skrollr.init({forceHeight: false});

/* Menu mobilne */
mobileMenu();

// Scroll dla naglowka
$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 20) {
		$('.main-header').addClass('header-short');
		$('.main-logo img').css('max-height', 28);
	} else {
		$('.main-header').removeClass('header-short');
		$('.main-logo img').css('max-height', 42);
	}
});

// Menu mobilne
function mobileMenu() {
	$('#mobile-icon').on('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').show();
	});
	$('#mobile-close').on('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').hide();
	});
}