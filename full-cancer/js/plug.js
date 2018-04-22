
$(document).ready(function(){
	
	//------------------------- search layer
    $('.main-search-btn').click(function(){
        $('.search-layer').fadeIn();
    });
    $('.close-btn').click(function(){
        $('.search-layer').fadeOut();
    });
	
	//------------------------------ xs navbar open close 
    $('.xs-navbar-btn').click(function(){
        var right = $('.xs-navbar').css('right');
        $('.xs-navbar').animate({right: '0px'});
		$('body').addClass('scroll_mob');
    });
    $('#xs-menu-close').click(function(){
        $('.xs-navbar').animate({right: '-100%'});
        $('body').removeClass('no-scroll');
    });
    $('.xs-navbar').click(function(e){
        if( e.target.id == 'xs-navbar-id'){
            $('.xs-navbar').animate({right: '-100%'});
            $('body').removeClass('no-scroll');
        }
    });
    
    /*--- xs navbar sub menu ---*/
    $('.xs-sub-menu > a').click(function(){
        if($('.xs-sub-menu > ul').css('display') == 'none'){
            $('.xs-sub-menu > ul').slideDown();
        }else{
            $('.xs-sub-menu > ul').slideUp();
        }
        
    });
    //------------------------ end xs navbar
	
	$('.menu-ul > li').mouseover(function(){
		$(this).children('.sub-menu').stop().slideDown(1000, 'easeOutElastic');
		$(this).children('.sub-menu').addClass('activate');
	});
	
	$('.menu-ul > li').mouseleave(function(){
		$(this).children('.sub-menu').slideUp(1000, 'easeInElastic');
		$(this).children('.sub-menu').removeClass('activate');
	});
	
	
	//entities
    $('.acc').on('click', function() {
        $(this).parent().toggleClass('open').children('.cor_panel').collapse('toggle');
        $(this).parent().siblings().removeClass('open').children('.cor_panel.in').collapse('hide');
    });
});

window.sr = ScrollReveal({ 
        reset: false ,
        easing: 'ease-in',
        origin:'bottom',
        distance: '100px',

    });
    //sr.reveal('.foo', { duration: 1000 }, 50);
    //sr.reveal('.bar', { duration: 1000 }, 50);
    sr.reveal('.foo' , { duration: 1000 });
    sr.reveal('.menu-animation', { duration: 700 , origin:'top', distance: '100px' }, 50);
    sr.reveal('.fromTop', { duration: 700 ,origin:'top', distance: '100px'});
    sr.reveal('.fromBottom', { duration: 1000 ,origin:'bottom', distance: '100px'});
    sr.reveal('.fromLeft', { duration: 1000 ,origin:'left', distance: '150px'});
    sr.reveal('.fromRight', { duration: 1000 ,origin:'right', distance: '150px'});

