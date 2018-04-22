
$(document).ready(function(){
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
      nav:true,
      navText:["<img src='images/ind-h-2.png'>","<img src='images/ind-h.png'>"]
  });


$('.pro_slider').owlCarousel({
    items:5,
    autoplay:true,
    rtl:true,
    loop: true,
	margin: 13,
    nav:true,
    navText:["<img src='images/ind-33.png'>","<img src='images/ind-3.png'>"],
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
})
	
	
	$('#navbtn').click(function(){
		$('#mySidenav').addClass('over_mob');
		$('.over_click').addClass('on');
	});
	
	
	$('.closebtn').click(function(){
		$('#mySidenav').removeClass('over_mob');
		$('.over_click').removeClass('on');
	});
	
	$('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});
});




  
      
