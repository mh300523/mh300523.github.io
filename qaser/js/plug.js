
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
	
	
	
	$('.tool_tip')
		.attr('data-toggle', 'tooltip')
		.attr('data-placement', 'top')
		.tooltip({
		trigger: 'manual'
	})
	.tooltip('show');
	$('.tooltip').addClass('anim-jump');
	
	

	$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
	}); 
	
	$('.pro_slider').owlCarousel({
		items:4,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:18,
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
	
});

var locations = [
	['Bondi Beach', 24.793192,44.5727932, 3],
	['Coogee Beach', 24.693192,46.6727932, 3],
	['Cronulla Beach', 24.893192,45.9727932, 3],
];

var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 6,
	center: new google.maps.LatLng(24.75,46.68),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});


var marker, i;

for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		icon: 'images/marker.png',
		map: map
	});
}