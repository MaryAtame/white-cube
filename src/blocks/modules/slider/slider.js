import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-slider]');

    elements.forEach((item) => {
        createSlider(item);
    });
});

function createSlider(item) {
    let swiper = Swiper;
    let init = false;
    const desctop = window.matchMedia('(min-width: 1200px)');
    const mobile = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');

    const slidesQuantity = item.getAttribute('data-slider-slides');
    const pagination = item.querySelector('.slider__pagination');
    const desctopOnly = !!(item.hasAttribute('data-slider-desctop'));


    function initSlider() {
        if (!desctopOnly || desctopOnly && desctop.matches) {
            if (!init) {
                init = true;
                swiper = callSlider();
            }
        } else if (desctopOnly && mobile.matches) {
            if (init) {
                swiper.destroy();
                init = false;
            }
        }
    }

    function callSlider() {
        return new Swiper(item.querySelector('.swiper'), {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            spaceBetween: 30,
            watchSlidesProgress: true,
            slideVisibleClass: 'slider__slide--visible',
            loop: true,
            pagination: {
                el: pagination,
                clickable: true,
                type: 'bullets',
                bulletClass: 'bullet',
                bulletActiveClass: 'bullet--active'
            },
            navigation: {
                nextEl: item.querySelector('[data-slider-next]'),
                prevEl: item.querySelector('[data-slider-prev]'),
            },
            breakpoints: {
                1200: {
                    slidesPerView: slidesQuantity,
                    spaceBetween: 20
                }
            }
        });
    }

    initSlider();

    window.addEventListener('resize', () => {
        initSlider();
    });
}