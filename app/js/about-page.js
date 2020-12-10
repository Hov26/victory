// init lazy loading
const observer = lozad();
observer.observe();

// // init wow js
new WOW().init();


$(document).ready(function() {
    var serviceSlider = $('.service-slider.owl-carousel');
    var titleSlider = $('.title-slider.owl-carousel');

    serviceSlider.owlCarousel({
        dots: false,
        nav: true,
        navElement: 'div',
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false,
        onInitialized: setIndexLength
    });
    titleSlider.owlCarousel({
        dots: false,
        nav: true,
        navElement: 'div',
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false
    });

    // Set service slider current index and items length
    function setIndexLength(e) {
        $('.current-item').text('0' + (e.item.index - 1) + '/' + ('0' + e.item.count))
    }

    // Change current slide index
    serviceSlider.on('changed.owl.carousel', function(e) {
        $('.current-item').text('0' + (e.item.index - 1) + '/' + ('0' + e.item.count))
    });

    // Trig service slider image by clicking arrow
    $('.title-slider .owl-next').click(function() {
        serviceSlider.trigger('next.owl.carousel');
    })
    $('.title-slider .owl-prev').click(function() {
        serviceSlider.trigger('prev.owl.carousel');
    })

});