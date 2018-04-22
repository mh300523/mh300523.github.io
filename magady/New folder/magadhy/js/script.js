$(document).ready(function(){
  var catBtn = $(".categories"),
      catMenu = $(".categories-menu");
  
  catBtn.on("click",function(){
    catMenu.slideToggle();
  });
  
  $(".main-carousel").owlCarousel({
    items:1,
    autoplay:true,
    autoplayTimeout:4000,
    dots:true,
    loop:true,
    rtl:true,
    nav:true,
    navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
  });
  
  $(".slider2").owlCarousel({
    autoplay:true,
    items:4,
    autoplayTimeout:4000,
    loop:true,
    rtl:true,
    margin:10,
    nav:true,
    navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
    responsive: {
      0:{items:1},
      768:{items:2},
      991:{items:3},
      1199:{items:4}
    }
    
  });
  
  $(".best-slider").owlCarousel({
    autoplay:true,
    autoplayTimeout:4000,
    loop:true,
    rtl:true,
    nav:true,
    margin:10,
    navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
    responsive:{
      0:{items:1},
      768:{items:2},
      991:{items:1}
    }
  });
  
  
  
});

wow = new WOW();
wow.init();