import Swiper, { Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

    const swiperGaranty = new Swiper('.slider-garanty', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
