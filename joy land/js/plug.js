
$(document).ready(function(){

	$('[data-toggle="tooltip"]').tooltip();
	
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

	$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
	});
	
	$('.pro_slider').owlCarousel({
		items:6,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:30,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:6
			}
		}
	}); 
	
});





