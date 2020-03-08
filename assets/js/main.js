$(document).ready(function($){
	"use strict";
	
	// WOW Js Active
	// new WOW().init();
	
	// ---- Active
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');










    /* scrollUp Minimum setup */
    $(function () {
    	$.scrollUp();
    });

}(jQuery));