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


    // var owl = $('.owl-carousel');
    var heroSlider = $('.hero-slider.owl-carousel');
    var serviceSlider = $('.service-slider.owl-carousel');
    var titleSlider = $('.title-slider.owl-carousel');
    var reviewSlider = $('.review-slider.owl-carousel');

    heroSlider.owlCarousel({
        dots: false,
        nav: true,
        navElement: 'div',
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true
    });
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



    // Set service slider current index and items length
    function setIndexLength(e) {
        $('.current-item').text('0' + (e.item.index - 1) + '/' + ('0' + e.item.count))
    }

    serviceSlider.on('changed.owl.carousel', function(e) {
        $('.current-item').text('0' + (e.item.index - 1) + '/' + ('0' + e.item.count))
    });

    $('.title-slider .owl-next').click(function() {
        serviceSlider.trigger('next.owl.carousel');
    })
    $('.title-slider .owl-prev').click(function() {
        serviceSlider.trigger('prev.owl.carousel');
    })


    $(".hamburger-btn").click(function() {
        $('.menu-container').addClass('open')
        $('.menu-wave').fadeIn(2000)
    })
    $(".close-btn").click(function() {
        $('.menu-container').removeClass('open')
        $('.menu-wave').hide()
    })


});