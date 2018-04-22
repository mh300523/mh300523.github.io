
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
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

      
