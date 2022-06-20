const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,

    centeredSlides: true,
    loop: true,
    direction: 'horizontal', //vertical , horizontal
    debugger: false,

    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    speed: 1500,

    breakpoints : {
        780: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        }
    }
});

const houseswiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 4,
    // loopFillGroupWithBlank: true,
    loop: true,
    direction: 'horizontal',
    debugger: false,
    pagination: {
        el: '.swiper-pagination1',
        type: 'bullets',
        clickable: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    speed: 1500,
    touchRatio: 0,

    breakpoints: {
        780: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
        }
    }

});
