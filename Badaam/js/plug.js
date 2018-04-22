
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
    items:3,
    autoplay:true,
    rtl:true,
    loop: true,
    margin:30,
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
            items:3
        }
    }
}); 
	
	$('.brands_slider').owlCarousel({
    items:10,
    autoplay:true,
    rtl:true,
    loop: true,
    nav:true,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:2
        },
        768:{
            items:5
        },
        991:{
            items:7
        },
        1199:{
            items:10
        }
    }
});
	
  $('[data-toggle="tooltip"]').tooltip();
	
	
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

