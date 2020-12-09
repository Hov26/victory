$(document).ready(function() {
    var page = $(window);
    var line = $('.line')
    page.scroll(function() {
        if ($(this).scrollTop() > 10) {
            line.addClass("animate");
        }
    });


    // Set service slider current index and items length
    var titleSliderLength = $('.title-slider .owl-stage .owl-item').not('.cloned').length
    $('.current-item').text('01/' + ('0' + titleSliderLength))


    // Set current fontSize for cursor
    // $(".typed-cursor").each(function() {
    //     $(this).addClass($(this).prev().attr('class'))
    // });

})