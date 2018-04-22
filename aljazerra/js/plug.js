
$(document).ready(function(){ 
	
	$(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
 	 });
	
	$('#navbtn').click(function(){
		$('#mySidenav').addClass('over');
		$('body').addClass('scroll_mob');
	});
	
	
	$('.closebtn').click(function(){
		$('#mySidenav').removeClass('over');
		$('body').removeClass('scroll_mob');
	});
	
	$(".mob_cat .dir").click(function(){
		$(this).parent().find(".mob_menu").slideToggle(400);
    });
    
    $(".mob_item").click(function(){
        $(this).parent().find(".sub_cat_menu").slideToggle(400);
    });
	
	$(".sub_cat_item").click(function(){
        $(this).parent().find(".sub_cat_menu2").slideToggle(400);
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


  
      
