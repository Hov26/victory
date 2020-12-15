// init lazy loading
const observer = lozad();
observer.observe();

// init wow js
new WOW().init();


$(document).ready(function() {

    $('.hero-title').fadeIn(2000)

    var reviewSlider = $('.review-slider.owl-carousel');

    reviewSlider.owlCarousel({
        dots: false,
        nav: true,
        navElement: 'div',
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false
    });

});