
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
      nav:true,
      navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });


$('.pro_slider').owlCarousel({
    items:5,
    autoplay:true,
    rtl:true,
    loop: true,
    margin:14,
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
    

});

  
      
      