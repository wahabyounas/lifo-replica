!(function($) {
	"use strict";

// PreLoader
setTimeout(function(){
	$('.loader-wrap').fadeToggle();
  }, 3000);

// Sticky Navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-nav");
function myFunction() {
  if (window.pageYOffset >= 60) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}
//   VenoBox 
$(document).ready(function() {
$('.venobox').venobox({
	'share': false
});
});
//counter
// $('[.counter"]').counterUp({
// 	delay: 10,
// 	time: 1000
//   });
$('.counter-count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
	  
	  //chnage count up speed here
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});

//   Owl Carousel

  $(".owl-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 20,
	autoplay: true,
	smartSpeed: 1500,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		991:{
			items:4
		}
	}
  });

})(jQuery);