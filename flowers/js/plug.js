
$(document).ready(function(){
    
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
  });     
});



function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    $('body').addClass('scroll_mob');
	document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('body').removeClass('scroll_mob');
	document.body.style.backgroundColor = "rgba(0,0,0,0)";
}
  
      
