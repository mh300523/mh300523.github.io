$(document).ready(function(){
    window.scrollTo(0, 0);
    //------------------------------ xs navbar open close 
    $('.xs-navbar-btn').click(function(){
        var right = $('.xs-navbar').css('right');
        $('.xs-navbar').animate({right: '0px'});
        $('body').addClass('no-scroll');
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
    
    $(window).scroll(function(){
        circlesAnimation();
    }); 
    function circlesAnimation(){
        var goalsTop = $('.goals').offset().top;
        var bottom = $(window).scrollTop() + $(window).height();
        if( goalsTop +50 + 150 < bottom ){
            $('.goal-ele.ele1').addClass('goals-animation');
            setTimeout(function(){ $('.goal-ele.ele2').addClass('goals-animation');},150);
            setTimeout(function(){ $('.goal-ele.ele3').addClass('goals-animation');},300);
        }
    }
    //----------------- end navbar scroll 
    
    
    window.sr = ScrollReveal({ 
        reset: false ,
        easing: 'ease-in',
        origin:'bottom',
        distance: '100px',

    });
    sr.reveal('.menu-animation', { duration: 700 , origin:'top', distance: '100px' }, 50);
    sr.reveal('.fromTop', { duration: 700 ,origin:'top', distance: '100px'});
    sr.reveal('.fromBottom', { duration: 1000 ,origin:'bottom', distance: '100px'});
    sr.reveal('.fromLeft', { duration: 1000 ,origin:'left', distance: '150px'});
    sr.reveal('.fromRight', { duration: 1000 ,origin:'right', distance: '150px'});
    sr.reveal('.fromRightLong', { duration: 1000 ,origin:'right', distance: '100%'});
                
    
    //------------------------- search layer
    $('.main-search-btn').click(function(){
        $('.search-layer').fadeIn();
    });
    $('.close-btn').click(function(){
        $('.search-layer').fadeOut();
    });
    
    
    //nice scroll start
        $(".nav-ele").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 120
        }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });

      } // End if

    });
    //nice scroll end
    
    
    
    
    
	
	$('.menu-ul > li').mouseover(function(){
		$(this).children('.sub-menu').stop().slideDown(1000, 'easeOutElastic');
		$(this).children('.sub-menu').addClass('activate');
	});
	
	$('.menu-ul > li').mouseleave(function(){
		$(this).children('.sub-menu').slideUp(1000, 'easeInElastic');
		$(this).children('.sub-menu').removeClass('activate');
	});
    
    //-------------------- flags open and close
//    $('.range-ele').mouseover(function(){
//        $(this).children('.range-body').css('z-index','3');
//		$(this).children('.range-body').stop().slideDown(1000, 'easeOutElastic');
//        
//	});
//	$('.range-ele').mouseleave(function(){
//		$(this).children('.range-body').slideUp(1000, 'easeInElastic');
//        $(this).children('.range-body').css('z-index','2');
//	});
    $(document).click(function(event){
        var target_class = $(event.target).attr('class');
        if(  target_class == 'range-head' || target_class == 'range-img' || target_class == 'range-txt' ){
            console.log('normal open-close');
        }else{
            $('.range-body').css('z-index','2');
            $('.range-body').slideUp(1000, 'easeInElastic');
        }
    });
    $('.range-head').click(function(){
        if( $(this).next('.range-body').css('display') == 'none'){
            $('.range-body').css('z-index','2');
            $('.range-body').slideUp(1000, 'easeInElastic');
            $(this).next('.range-body').css('z-index','3');
            $(this).next('.range-body').slideDown(1000, 'easeOutElastic');
        }else{
            $(this).next('.range-body').slideUp(1000, 'easeInElastic');
            $(this).next('.range-body').css('z-index','2');
        }
        
    });
    
    
});