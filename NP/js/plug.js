
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
  });


$('.pro_slider').owlCarousel({
    items:6,
    autoplay:true,
    rtl:true,
    loop: true,
    margin:29,
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
            items:4
        },
        1199:{
            items:6
        }
    }
});
    

});

  
      
      