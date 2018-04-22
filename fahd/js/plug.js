
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:false,
      rtl:true,
      loop: true,
  });  
});



function openNav() {
    document.getElementById("mySidenav").style.width = "90%";
    $('body').addClass('scroll_mob');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('body').removeClass('scroll_mob');
}
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
  
      
