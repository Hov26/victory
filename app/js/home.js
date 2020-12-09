// init lazy loading
const observer = lozad();
observer.observe();

// init wow js
new WOW().init();


$(document).ready(function() {

    var line = $('.line')
    var licenseSectionTopPosition = $('.license').position().top

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

    $(window).scroll(function() {
        if (($(this).scrollTop() - licenseSectionTopPosition) > licenseSectionTopPosition) {
            line.addClass("animate");
            typeTextOnce()
        }
    });

    // typed.js Main heading
    var typed = new Typed('#typed-main-heading', {
        stringsElement: '#main-heading',
        typeSpeed: 50,
        showCursor: false
    });


    var owl = $('.owl-carousel');
    var serviceSlider = $('.service-slider');
    var titleSlider = $('.title-slider');
    var heroSlider = $('.hero-slider');

    owl.owlCarousel({
        dots: false,
        nav: true,
        navElement: 'div',
        items: 1,
        loop: true,
        margin: 0,
        // autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        // animateOut: 'fadeOut',
        autoplayHoverPause: true,
        // responsive: {
        //     0: {
        //         items: 1
        //     }
        // }
    });

    heroSlider.owlCarousel({
        // autoplay: true,
    });
    serviceSlider.owlCarousel({
        // autoplay: false,
    });
    titleSlider.owlCarousel({
        // autoplay: false,
    });

    // Set service slider current index and items length
    var titleSliderLength = $('.title-slider .owl-stage .owl-item').not('.cloned').length
    $('.current-item').text('01/' + ('0' + titleSliderLength))

    $('.title-slider .owl-next').click(function() {
        serviceSlider.trigger('next.owl.carousel');
    })
    $('.title-slider .owl-prev').click(function() {
        serviceSlider.trigger('prev.owl.carousel');
    })

    owl.on('changed.owl.carousel', function(e) {
        $('.current-item').text('0' + (e.item.index - 1) + '/' + ('0' + e.item.count))
    });

});