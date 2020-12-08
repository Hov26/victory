$(document).ready(function() {
    // var topMenu = $("#header-content");
    var page = $(window);
    var line = $('.line')
    page.scroll(function() {
        if ($(this).scrollTop() > 10) {
            line.addClass("animate");
        }
    });
})