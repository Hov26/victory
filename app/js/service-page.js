// init lazy loading
const observer = lozad();
observer.observe();

// // init wow js
new WOW().init();

$(document).ready(function() {
    $('.service-btn').click(function() {
        var serviceBtn = $(this)
        if (!$(this).hasClass('active')) {
            $('.service-btn').removeClass('active')
            $(this).addClass('active')
        }

        $(".current-service").each(function() {
            if (serviceBtn.attr('data-service') === $(this).attr('data-service')) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        });
    })


})