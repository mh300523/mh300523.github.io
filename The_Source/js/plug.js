
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
	
	$('.down_nav .title').click(function(){
		$('.demo').slideToggle(400);
	});
	
	$('#navbtn').click(function(){
		$('#mySidenav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});
	
	
	$('.closebtn').click(function(){
		$('#mySidenav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
	
	$('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});
	
	
	$(".mob_cat .direct").click(function(){
		$(this).parent().find(".mob_menu").slideToggle(400);
    });

    $(".mob_item").click(function(){
        $(this).parent().find(".sub_cat_menu").slideToggle(400);
    });
	
});

