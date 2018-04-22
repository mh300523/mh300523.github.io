$(document).ready(function(){
    
    
    $(".pro1").mouseenter(function(){
    $(".pro1 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro2").mouseenter(function(){
    $(".pro2 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro3").mouseenter(function(){
    $(".pro3 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro4").mouseenter(function(){
    $(".pro4 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro5").mouseenter(function(){
    $(".pro5 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro6").mouseenter(function(){
    $(".pro6 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro7").mouseenter(function(){
    $(".pro7 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro8").mouseenter(function(){
    $(".pro8 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
     $(".pro9").mouseenter(function(){
    $(".pro9 img").css("transform","scale3d(1.1,1.1,1) translate3d(0,5%,0)");
    });
    
    $(".product").mouseleave(function(){
    $(".product img").css("transform","none");
    });
    
    
    
    $(".pro1 button").click(function(){
    $(".modal #carousel1 .s1,.modal #carousel1 .i1,.modal #carousel2 .i1").siblings().removeClass("active");
    $(".modal #carousel1 .s1,.modal #carousel1 .i1,.modal #carousel2 .i1").addClass("active");
    });
    
    $(".pro2 button").click(function(){
    $(".modal #carousel1 .s2,.modal #carousel1 .i2,.modal #carousel2 .i2").siblings().removeClass("active");
    $(".modal #carousel1 .s2,.modal #carousel1 .i2,.modal #carousel2 .i2").addClass("active");
    });
    
     $(".pro3 button").click(function(){
    $(".modal #carousel1 .s3,.modal #carousel1 .i3,.modal #carousel2 .i3").siblings().removeClass("active");
    $(".modal #carousel1 .s3,.modal #carousel1 .i3,.modal #carousel2 .i3").addClass("active");
    });
    
      $(".pro4 button").click(function(){
    $(".modal #carousel1 .s4,.modal #carousel1 .i4,.modal #carousel2 .i4").siblings().removeClass("active");
    $(".modal #carousel1 .s4,.modal #carousel1 .i4,.modal #carousel2 .i4").addClass("active");
    });
    
      $(".pro5 button").click(function(){    
    $(".modal #carousel1 .s5,.modal #carousel1 .i5,.modal #carousel2 .i5").siblings().removeClass("active");
    $(".modal #carousel1 .s5,.modal #carousel1 .i5,.modal #carousel2 .i5").addClass("active");
    });
    
      $(".pro6 button").click(function(){
    $(".modal #carousel1 .s6,.modal #carousel1 .i6,.modal #carousel2 .i6").siblings().removeClass("active");
    $(".modal #carousel1 .s6,.modal #carousel1 .i6,.modal #carousel2 .i6").addClass("active");
    });
    
    
      $(".pro7 button").click(function(){
    $(".modal #carousel1 .s7,.modal #carousel1 .i7,.modal #carousel2 .i7").siblings().removeClass("active");
    $(".modal #carousel1 .s7,.modal #carousel1 .i7,.modal #carousel2 .i7").addClass("active");
    });
    
    $(".pro8 button").click(function(){
    $(".modal #carousel1 .s8,.modal #carousel1 .i8,.modal #carousel2 .i8").siblings().removeClass("active");
    $(".modal #carousel1 .s8,.modal #carousel1 .i7,.modal #carousel2 .i8").addClass("active");
    });
    
      $(".pro9 button").click(function(){
    $(".modal #carousel1 .s9,.modal #carousel1 .i9,.modal #carousel2 .i9").siblings().removeClass("active");
    $(".modal #carousel1 .s9,.modal #carousel1 .i9,.modal #carousel2 .i9").addClass("active");
    });
    
 
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



$(document).ready(function() {      
   $('#carousel1,#carousel2').carousel({
    pause: true,
    interval: false
});
    
    
    
    var carousel1 = $('#carousel1').carousel();
    var carousel2= $('#carousel2').carousel();
    carousel1.on('slide.bs.carousel', function(event) {
        var to = $(event.relatedTarget).index();
        carousel2.carousel(to);
});
});















