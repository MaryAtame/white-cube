import Swiper, { Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-slider]');

    elements.forEach((item) => {
        createSlider(item);
    });
});

function createSlider(item) {
    function callSlider() {
        return new Swiper(item.querySelector('.swiper'), {
            modules: [Pagination],
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 20,
            watchSlidesProgress: true,
            slideVisibleClass: 'slider__slide--visible',
            pagination: {
                el: '.slider__pagination',
                clickable: true,
                type: 'bullets',
                bulletClass: 'bullet',
                bulletActiveClass: 'bullet--active'
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
    };
    callSlider();
}
