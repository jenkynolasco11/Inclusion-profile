$(window).scroll(function() {
    if ($(window).scrollTop() < window.innerHeight / 4) {
        $('.nav-return').hide();
    } else {
        $('.nav-return').show();
    }
}).ready(function() {
    $('.nav-return').on('click', function(e) {
        // console.log('It got clicked');
        $('html, body').animate({ scrollTop: 0 }, 400);
    });

    $('.nav-return').hide();
}).resize(function() {
    if (window.innerWidth < 998) {
        $('header nav').addClass('burger-menu');
    } else {
        $('header nav').removeClass('burger-menu');
    };
}).resize();