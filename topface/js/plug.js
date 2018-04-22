var mainOwl;
$(document).ready(function(){

	mainOwl = $('.mainslider');

	mainOwl.owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
		navText:["<img src='images/ind-left.png'>","<img src='images/ind-right.png'>"]
	});

	$('.mainslider .owl-prev').append("<img class='prev'></img>");
	$('.mainslider .owl-next').append("<img class='next'></img>");
	

	mainOwl.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prev = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('data-navipicture');
		var next = $(property.target).find(".owl-item").eq(current).next().find("img").attr('data-navipicture');

		$('.mainslider .owl-prev').find('img.prev').attr('src', prev);
		$('.mainslider .owl-next').find('img.next').attr('src', next);
	});
	
	$(window).load(function(){
		$('.mainslider .owl-next').trigger('click');
	});


	$('.pro_slider').owlCarousel({
		items:5,
		autoplay:true,
		rtl:true,
		loop: true,
		margin: 13,
		nav:true,
		navText:["<img src='images/pro-ind-p.png'>","<img src='images/pro-ind-n.png'>"],
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

	$("header .dir").hover(function(){
		$(this).parent().find(".pro_menu").slideToggle(300);
	});

	$(".mob_cat .direct").click(function(){
		$(this).parent().find(".mob_menu").slideToggle(400);
	});

	$(".mob_item").click(function(){
		$(this).parent().find(".sub_cat_menu").slideToggle(400);
	});

});





