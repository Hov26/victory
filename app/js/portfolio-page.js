// init lazy loading
const observer = lozad();
observer.observe();

// // init wow js
new WOW().init();

$(document).ready(function() {
    $('.hero-wave').fadeIn(2000)

})