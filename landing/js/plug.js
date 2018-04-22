
$(document).ready(function(){

	$('#navbtn').click(function(){
		$('#mySidenav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('#mySidenav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});

	$('.over_click,.sidenav .direct').click(function(){
		$('.closebtn').trigger('click');
	});
	
	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the 
		//nav bar to stick.  
		if ($(window).scrollTop() > 85) {
			$('.top_nav').addClass('scroll_nav');
			$('.logo img').attr('src','images/logo-2.png');
			$('#navbtn img').attr('src','images/nav-2.png');
		}
		if ($(window).scrollTop() < 86) {
			$('.top_nav').removeClass('scroll_nav');
			$('.logo img').attr('src','images/logo.png');
			$('#navbtn img').attr('src','images/nav.png');
		}
	});
	
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	
	
	$('.pro_slider').owlCarousel({
		items:3,
		autoplay:false,
		rtl:true,
		loop: true,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:3
			},
			991:{
				items:6
			},
			1199:{
				items:8
			}
		}
	}); 

});





