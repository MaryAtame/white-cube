import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

    const swiperReview = new Swiper('.slider-review', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev',
        },
    });
});
