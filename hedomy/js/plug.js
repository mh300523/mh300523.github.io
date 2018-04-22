
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
  }); 
 
  $('[data-toggle="tooltip"]').tooltip();
    
  $('.replace').click(function(){
		$('.trade').addClass('open');
	  	$('.trade').addClass('rep');	
	});
	
	$('.replace2').click(function(){
		$('.trade').removeClass('open');
		$('.trade').removeClass('rep');
	});
	
	
	$('.down_nav .title').click(function(){
		$('.demo').slideToggle(400);
	});
	
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

    $(".mob_item").click(function(){
        $(this).parent().find(".sub_cat_menu").slideToggle(400);
    });
	
	$("#slide .heading").click(function(){
        $(this).parent().find(".fast").slideToggle(400);
		$(this).toggleClass('active');
    });
});


/**************************counter js************************/
 var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter,header').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

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
