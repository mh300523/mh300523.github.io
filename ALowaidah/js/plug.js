
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
	
	$('[data-toggle="tooltip"]').tooltip();

});

var map;
var infowindow;

function initialize() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		backgroundColor: '#000',
		center: new google.maps.LatLng(24.471007, 39.47747),
		mapTypeId: 'roadmap',
		streetViewControl: false,
	});
	infowindow = new google.maps.InfoWindow({
		backgroundColor: '#000000'
	});
	var iconBase = 'images/numbers/';
	var icons = {
		001: {
			icon: "images/mark-1.png"
		},
		002: {
			icon: "images/mark-2.png"
		}
	};

	function addMarker(feature) {
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map,

		});
		// must be a string (or a DOM node).
		var content = "" + feature.title
		google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
			return function(evt) {
				infowindow.setContent(content);
				infowindow.open(map, marker);
			};
		})(marker, content, infowindow));

	}

	var features = [{
		position: new google.maps.LatLng(24.5930135,39.9613775,14),
		type: 001,
		title:"<div class='ar_loc'><div class='loc_photo'><img src='images/pro-1.png'></div><div class='loc_infor'><div class='loc_name'>فيلا دورين منفصلين للبيع في الصفراء</div><div class='loc_price'>500,000 ريال</div></div></div><div class='en_loc'><div class='loc_photo'><img src='images/pro-1.png'></div><div class='loc_infor'><div class='loc_name'>Villa Two separate floors for sale in Yellow</div><div class='loc_price'>500,000 SAR</div></div></div>"
	}, {
		position: new google.maps.LatLng(24.4710078,39.057243,9),
		type: 002,
		title:"<div class='ar_loc'><div class='loc_photo'><img src='images/pro-1.png'></div><div class='loc_infor'><div class='loc_name'>فيلا دورين منفصلين للبيع في الصفراء</div><div class='loc_price'>500,000 ريال</div></div></div><div class='en_loc'><div class='loc_photo'><img src='images/pro-1.png'></div><div class='loc_infor'><div class='loc_name'>Villa Two separate floors for sale in Yellow</div><div class='loc_price'>500,000 SAR</div></div></div>"
	}];

	for (var i = 0, feature; feature = features[i]; i++) {
		addMarker(feature);
	};
}
google.maps.event.addDomListener(window, "load", initialize);


//location

var map = new GMaps({
	el: '#location',
	lat: 24.7241503,
	lng: 46.2620343,
	zoom: 9,
});

map.addMarker({
	lat: 24.7141503,
	lng: 46.6720343,
	icon: 'images/pin.png',
});

