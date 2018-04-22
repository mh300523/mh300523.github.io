
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
  }); 
    
    
    $('.pro_slider').owlCarousel({
    items:4,
    autoplay:true,
    rtl:true,
    loop: true,
    margin:22,
    nav:true,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
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
 
    $('[data-toggle="tooltip"]').tooltip();
    
    
});



function openNav() {
    document.getElementById("mySidenav").style.width = "90%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  
      
