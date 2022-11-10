import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

    const swiperIntro = new Swiper('.slider-intro', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
         navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev',
        },
    });
});
