
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
  }); 
	
	$('.pro_slider').owlCarousel({
    items:5,
    autoplay:true,
    rtl:true,
    loop: true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        768:{
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
	
	$('[data-toggle="tooltip"]').tooltip();
	
	$(".intro").height($(window).height()-169);
	
	$(window).resize(function(){
			$(".intro").height($(window).height()-169);
	});
	
	
	 // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
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

      
