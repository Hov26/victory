// init lazy loading
const observer = lozad();
observer.observe();

// // init wow js
new WOW().init();


$(document).ready(function() {

    var line = $('.line')
    var licenseSectionTopPosition = $('.license').position().top

    // license section start animation function
    var typeTextOnce = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                var typed = new Typed('#typed-license1', {
                    stringsElement: '#license1',
                    typeSpeed: 50,
                    showCursor: false
                });
                // typed.js license section 2ndt line
                var typed2 = new Typed('#typed-license2', {
                    stringsElement: '#license2',
                    typeSpeed: 70,
                    showCursor: false
                });
                // typed.js license section 3rd line
                var typed3 = new Typed('#typed-license3', {
                    stringsElement: '#license3',
                    typeSpeed: 90,
                    showCursor: false
                });
            }
        };
    })();

    // Animate license section SVGs
    $(window).scroll(function() {
        if (($(this).scrollTop() - (licenseSectionTopPosition / 2)) > licenseSectionTopPosition) {
            line.addClass("animate");
            typeTextOnce()
        }
    });

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