
$(document).ready(function(){
  $(".mainslider1").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
	  nav:true,
      navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  }); 
	
	$(".mainslider2").owlCarousel({
      items:1,
      autoplay:false,
      rtl:true,
      loop: true,
  }); 
	
	
	$('.pro_slider').owlCarousel({
    items:5,
    autoplay:true,
    rtl:true,
    loop: true,
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
            items:5
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