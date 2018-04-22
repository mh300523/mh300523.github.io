
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
	
	$('.sidenav .mob_item').on('click', function() {
		$(this).parent().toggleClass('open').children('.mob_sub_list').collapse('toggle');
		$(this).parent().siblings().removeClass('open').children('.mob_sub_list.in').collapse('hide');
	});
	
	$('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
	

	$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
	}); 
	
	$('#pro_slider-1').owlCarousel({
		items:5,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:16,
		nav:true,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			750:{
				items:3
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
		autoplay:false,
		rtl:true,
		loop: true,
		margin:16,
		nav:true,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			750:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:5
			}
		}
	});
	
	$('#pro_slider-3').owlCarousel({
		items:5,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:16,
		nav:true,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			750:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:5
			}
		}
	});
	
});
