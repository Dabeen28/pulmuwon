$(document).ready(function() {
    var swiper = new Swiper('.slide-box', {
        effect: 'fade',
        loop: true,
    });

    var swiper = new Swiper('.f-banner-box', {
        effect: 'fade',
        loop: true,
        autoplay: true,
    });

    new Swiper('.hi-sw', {
        effect: 'slide',
        clickable: true,
        slidesPerView: 4,
        pagination: {
            el: '.hi-sw-pg',
            clickable : true,
            
        },
    });
    

    



});