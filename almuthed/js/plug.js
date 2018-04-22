
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
	
	$(".mob_cat .direct").click(function(){
		$(this).parent().find(".mob_menu").slideToggle(400);
	});

	$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<i class='far fa-arrow-alt-circle-left'></i>","<i class='far fa-arrow-alt-circle-right'></i>"]
	});
	
	$('.pro_slider').owlCarousel({
		items:4,
		autoplay:true,
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
				items:2
			},
			991:{
				items:3
			},
			1199:{
				items:4
			}
		}
	}); 
	
	$('[data-toggle="tooltip"]').tooltip();

});





