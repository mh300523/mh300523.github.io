
$(document).ready(function(){
  
   $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 146) {
      $('.down_nav').addClass('down-fixed');
    }
    if ($(window).scrollTop() < 147) {
      $('.down_nav').removeClass('down-fixed');
    }
  });
    

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
    margin:24,
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
            items:5
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
  
      
