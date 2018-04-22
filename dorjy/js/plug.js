
$(document).ready(function(){
	
	$('.pro_slider').owlCarousel({
		items:4,
		autoplay:true,
		rtl:true,
		loop: true,
		margin:30,
		nav:true,
		navText:["<img src='images/ind-left.png'>","<img src='images/ind-right.png'>"],
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
	
	$('.dropdown-submenu a.test').on("click", function(e){
		$(this).parent().toggleClass('open').children('.drop_submenu').next('ul').toggle();
		$(this).parent().siblings().removeClass('open').children('.drop_submenu').next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});
	
	$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

		var $target = $(e.target);

		if ($target.parent().hasClass('disabled')) {
			return false;
		}
	});
	
	
	$("input[type=radio][name=choice-1]").change(function (e) {
		$('#step_1').removeClass('active');
		$('#step_1').addClass('changed').attr('data-content');
		$('#step_1').next().removeClass('disabled');
		$('#step_1').next().addClass('active');
		$('#category1').removeClass('active in');
		$('#category1').next().addClass('active in');
	});

	$("input[type=radio][name=choice-2]").change(function (e) {
		$('#step_2').removeClass('active');
		$('#step_2').addClass('changed').attr('data-content');
		$('#step_2').next().removeClass('disabled');
		$('#step_2').next().addClass('active');
		$('#category2').removeClass('active in');
		$('#category2').next().addClass('active in');
	});

	$("input[type=radio][name=choice-3]").change(function (e) {
		$('#step_3').removeClass('active');
		$('#step_3').addClass('changed').attr('data-content');
		$('#step_3').next().removeClass('disabled');
		$('#step_3').next().addClass('active');
		$('#category3').removeClass('active in');
		$('#category3').next().addClass('active in');
	});

	$("input[type=radio][name=choice-4]").change(function (e) {
		$('#step_4').removeClass('active');
		$('#step_4').addClass('changed').attr('data-content');
		$('#step_4').next().removeClass('disabled');
		$('#step_4').next().addClass('active');
		$('#category4').removeClass('active in');
		$('#category4').next().addClass('active in');
	});

	$("input[type=radio][name=choice-5]").change(function (e) {
		$('#step_5').removeClass('active');
		$('#step_5').addClass('changed').attr('data-content');
		$('.tab-content,.ours_pcks').addClass('disappear');
		$('.your_costs,.ours_pcks').addClass('appear');
	});
	
	$("#re_up").click(function (e) {
		$('#step_5').addClass('active');
		$('.tab-content,.ours_pcks').removeClass('disappear');
		$('.your_costs,.ours_pcks').removeClass('appear');
	});
	
});

var count = 3;
function add() {
	count += 1;
	document.getElementById("counting").innerHTML = count;
};
function cut() {
	if(count > 1)
		{
			count -= 1;
		}
	document.getElementById("counting").innerHTML = count;
};

var adresses = [
	""
];


var locations = [
	[adresses[0], 24.74, 46.70, 1]
];

var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	center: new google.maps.LatLng(24.74, 46.70, 1),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});
var marker, i;

for (i = 0; i < locations.length; i++) {  
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map,
		icon: 'images/marker.png'
	});

	google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
		}
	})(marker, i));
}
