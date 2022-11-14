import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    const bulletMarkup = `
        <button class="bullet-dynamic">
            <svg class="bullet-dynamic__svg">
                <circle class="bullet-dynamic__circle bullet-dynamic__circle--path" cx="10" cy="10" r="5"></circle>
                <circle class="bullet-dynamic__circle bullet-dynamic__circle--progress" cx="10" cy="10" r="9"></circle>
            </svg>
        </button>`;


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
                type: 'bullets',
                clickable: true,
                el: '.slider-intro__pagination',
                bulletClass: 'bullet-dynamic',
                modifierClass: '',
                bulletActiveClass: 'bullet-dynamic--active',
                renderBullet: () => bulletMarkup,
        },
         navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev',
        },
    });
});
