$(document).ready(function(){
    $(".glyphicon-menu-hamburger").click(function(){
    $("#demo").slideToggle(400);
    });
    
    $(".fa-chevron-down").click(function(){
    $(".drop_list").slideToggle(400);
    });
    
     $(".hide span").click(function(){
    $(".hide ul").slideToggle(400);
    });
    
    $(".Food_items").hover(function(){
    $(".Food_items .sub_list").fadeToggle();
    });
    
    $(".Milk").hover(function(){
    $(".Milk .sub_list").fadeToggle();
    });
    
    $(".Frozen").hover(function(){
    $(".Frozen .sub_list").fadeToggle();
    });
    
    $(".Bakery").hover(function(){
    $(".Bakery .sub_list").fadeToggle();
    });
    
    
    $(".Health").hover(function(){
    $(".Health .sub_list").fadeToggle();
    });
    
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1,
   
  });
});
