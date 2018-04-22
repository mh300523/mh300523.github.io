
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

	$('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});
	
	$('.sidenav .direct').on('click', function() {
		$(this).parent().toggleClass('open').children('.mob_menu').collapse('toggle');
		$(this).parent().siblings().removeClass('open').children('.mob_menu.in').collapse('hide');
	});

	$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
	}); 
	
	
	$('.pro_slider').owlCarousel({
		items:5,
		autoplay:false,
		rtl:true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			750:{
				items:2
			},
			992:{
				items:4
			},
			1199:{
				items:5,
				mouseDrag:false
			}
		}
	}); 
	
});
