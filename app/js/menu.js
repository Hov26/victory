$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $('.header-container').addClass('with-bg')
        } else {
            $('.header-container').removeClass('with-bg')
        }
    });

    // Open menu
    $(".hamburger-btn").click(function() {
        $('.menu-container').addClass('open')
        $('.menu-wave').fadeIn(1500)
        $('.menu-li').addClass('show')
        $('.menu-brand-logo').addClass('show')
        $('body').addClass('scroll-off')
    })

    // Close menu
    $(".close-btn").click(function() {
        $('.menu-container').removeClass('open')
        $('.menu-wave').hide()
        $('.menu-li').removeClass('show')
        $('.menu-brand-logo').removeClass('show')
        $('body').removeClass('scroll-off')
    })
})