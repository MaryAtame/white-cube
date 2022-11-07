import Swiper, {Navigation} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

    const swiperReview = new Swiper('.slider-review', {
        modules: [Navigation],
        slidesPerView: 1.5,
        spaceBetween: 20,
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev',
        },
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });
});
