

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
    
    if($(window).scrollTop() > 120){
        $('.navbar-section').addClass('scrolled-nav');
        $('.logo-div img').attr('src','pic/logo2.png');
        $('.xs-navbar-btn img').attr('src','pic/bar-reversed.png');
        $('body').css('padding-top','120px');
    }
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 120) {
          $('.navbar-section').addClass('scrolled-nav');
          $('.logo-div img').attr('src','pic/logo2.png');
          $('.xs-navbar-btn img').attr('src','pic/bar-reversed.png');
          $('body').css('padding-top','120px');
        } else if (scrollTop < 120) {
          $('.navbar-section').removeClass('scrolled-nav');
          $('.logo-div img').attr('src','pic/logo.png');
            $('.xs-navbar-btn img').attr('src','pic/bars.png');
          $('body').css('padding-top','0px');
        } 
        var goalsTop = $('.goals').offset().top;
        var bottom = $(window).scrollTop() + $(window).height();
        if( goalsTop +50 + 150 < bottom ){
            $('.goal-ele.ele1').addClass('goals-animation');
            setTimeout(function(){ $('.goal-ele.ele2').addClass('goals-animation');},150);
            setTimeout(function(){ $('.goal-ele.ele3').addClass('goals-animation');},300);
        }
    }); 
    //----------------- end navbar scroll 
    
    //----------------------- text animations then play video
    setTimeout(
        function header_animation(){
            $('.ar-text-div').animate({width: '100%'}, 1500);
            setTimeout(function(){ 
                $('.ar-text-div').css("border","none");
                $('.en-text-div').css("border-right","1px solid #fff");
                $('.en-text-div').animate({width: '100%'}, 1500);
                setTimeout(function(){ $('.en-text-div').css("border","none");player.playVideo();},1500);
            }, 1500);
        }
    , 700);
    
    
    window.sr = ScrollReveal({ 
        reset: false ,
        easing: 'ease-in',
        origin:'bottom',
        distance: '100px',

    });
    //sr.reveal('.foo', { duration: 1000 }, 50);
    //sr.reveal('.bar', { duration: 1000 }, 50);
    sr.reveal('.menu-animation', { duration: 700 , origin:'top', distance: '100px' }, 50);
    sr.reveal('.fromTop', { duration: 700 ,origin:'top', distance: '100px'});
    sr.reveal('.fromBottom', { duration: 1000 ,origin:'bottom', distance: '100px'});
    sr.reveal('.fromLeft', { duration: 1000 ,origin:'left', distance: '150px'});
    sr.reveal('.fromRight', { duration: 1000 ,origin:'right', distance: '150px'});
                
    
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
    
    /**************************counter js************************/
     var a = 0;
    $(window).scroll(function() {

      var oTop = $('.counter,header').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
            var current = $(this);
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
                $(current).prepend(' <span>+</span>');
              }

            });
            
            
        });
        a = 1;
      }

    });
    
    
    
    
    //$('.sub-menu').hide();
	
	$('.menu-ul > li').mouseover(function(){
		$(this).children('.sub-menu').stop().slideDown(1000, 'easeOutElastic');
		$(this).children('.sub-menu').addClass('activate');
	});
	
	$('.menu-ul > li').mouseleave(function(){
		$(this).children('.sub-menu').slideUp(1000, 'easeInElastic');
		$(this).children('.sub-menu').removeClass('activate');
	});
    
    
    $('#videos-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:20,
        items:1,
        center: true,
        onInitialized: transp,
        onTranslated: transp,
        onDragged:untransp,
        responsive:{
            0:{
                stagePadding: 0,
            },
            768:{
                stagePadding: 200,
            },
            992:{
                stagePadding: 300,
            },
            1200:{
                stagePadding: 400,
            }
        },
    })
    
    function transp() {
        $('.events-slider .center > .item > a > img').addClass('transp');
        
    }
       
    function untransp() {
        $('.events-slider .owl-item > .item > a > img').removeClass('transp');
        $('.events-slider .owl-item > .item > a > img').css('opacity','0.4');
        transp();
    }
    
});