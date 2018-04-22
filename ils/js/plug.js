
$(document).ready(function(){
	
	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the 
		//nav bar to stick.  
		if ($(window).scrollTop() > 108) {
			$('.top_nav').addClass('scroll_nav');
			$('.logo.lg img').attr('src','images/logo-f.png');
		}
		if ($(window).scrollTop() < 109) {
			$('.top_nav').removeClass('scroll_nav');
			$('.logo.lg img').attr('src','images/logo.png');
		}
	});
	
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
  }); 
	
	$('.pro_slider-1').owlCarousel({
		items:6,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
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
	
	$('.pro_slider-2').owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			991:{
				items:1
			},
			1199:{
				items:1
			}
		}
	});
 
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
	
	$('.sidenav .direct').on('click', function() {
		$(this).parent().toggleClass('open').children('.mob_menu').collapse('toggle');
		$(this).parent().siblings().removeClass('open').children('.mob_menu.in').collapse('hide');
	});
	
	$(".pro_drop").hover(function(){
		$(this).parent().find(".pro_menu").slideToggle(300);
	});
	
	
	$('#cv').on('change', function () {
		var val = $(this).val();
		$('#filename').val(val);
	});
	
});


var adresses = [
	""
	];


	var locations = [
		[adresses[0], 24.74, 46.70, 1]
	];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: new google.maps.LatLng(24.74, 46.70, 1),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow();

	var marker, i;

	for (i = 0; i < locations.length; i++) {  
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: 'images/riyadh.png'
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
}

