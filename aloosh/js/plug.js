
$(document).ready(function(){
 
    $('[data-toggle="tooltip"]').tooltip();
    
    $(".main .title").click(function(){
        $(".main .menu").slideToggle(400);
    });
    
    
    $(".mob_cat .direct").click(function(){
        $(".mob_menu").slideToggle(400);
    });
    
    
    $(".element").click(function(){
        $(this).parent().find(".sub_element").slideToggle(400);
    });
    
    
    
    $(".mob_item").click(function(){
        $(this).parent().find(".sub_cat_menu").slideToggle(400);
    });
    
});



function openNav() {
    document.getElementById("mySidenav").style.width = "90%";
    $('body').addClass('scroll_mob');
	document.body.classList.add("color");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('body').removeClass('scroll_mob');
	document.body.style.opacity = "1";
}
  
      
