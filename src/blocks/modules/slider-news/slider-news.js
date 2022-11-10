import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

    const swiperNews = new Swiper('.slider-news', {

        slidesPerView: 1.5,
        spaceBetween: 20,
        direction: 'horizontal',
        loop: true,


        breakpoints: {
            // when window width is >= 480px
            980: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });
});
