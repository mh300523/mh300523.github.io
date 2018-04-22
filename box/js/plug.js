
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
	
	$('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
	

	$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true
	}); 
	
	$('#pro_slider-1').owlCarousel({
		items:5,
		autoplay:true,
		rtl:true,
		loop: true,
		margin:14,
		nav:true,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			991:{
				items:4
			},
			1199:{
				items:5
			}
		}
	}); 
	
	$('#pro_slider-2').owlCarousel({
		items:5,
		autoplay:true,
		rtl:true,
		loop: true,
		margin:14,
		nav:true,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			991:{
				items:4
			},
			1199:{
				items:5
			}
		}
	}); 
	
	$('#brand_slider').owlCarousel({
		items:6,
		autoplay:true,
		rtl:true,
		loop: true,
		margin:14,
		nav:true,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
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
