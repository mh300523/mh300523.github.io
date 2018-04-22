/* global src */

$(document).ready(function() {


    new WOW().init();


    $("#slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 20,
        autoplayHoverPause: true,
        nav: true,
        transitionStyle: true,
        dots: true,
        loop: true,
        rtl: true,
        smartSpeed: 1000,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#pro-slider,#pro-slider3").owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 10,
        autoplayHoverPause: true,
        nav: true,
        transitionStyle: true,
        dots: false,
        loop: true,
        rtl: true,
        smartSpeed: 1000,
        navText: [
            "<i class='fa fa-angle-right'></i>",
            "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 4
            }
        }
    });

    $("#pro-slider2").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 0,
        autoplayHoverPause: true,
        nav: true,
        transitionStyle: true,
        dots: false,
        loop: true,
        rtl: true,
        smartSpeed: 1000,
        navText: [
            "<i class='fa fa-angle-right'></i>",
            "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 1
            }
        }
    });


    $(".header-bottom .head ").click(function() {
        $(".right-menu").toggleClass("show");
    });

});