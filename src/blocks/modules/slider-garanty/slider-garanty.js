import Swiper, { Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

    const swiperGaranty = new Swiper('.slider-garanty', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 20,
        pagination: {
            el: '.slider-pagination',
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
