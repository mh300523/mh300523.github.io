
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
      nav:true,
      navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $(".menu").click(function(){
    $(".latest").addClass("listview");
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    });
    
    $(".network").click(function(){
    $(".latest").removeClass("listview");
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    });
    
});

  
      
