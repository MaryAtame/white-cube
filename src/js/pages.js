const fs = require('fs');
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Includes
const head = fs.readFileSync('src/includes/head.html');
const sectionHeader = fs.readFileSync('src/includes/section-header.html');
const sectionIntro = fs.readFileSync('src/includes/index/section-intro.html');
const sectionCategory = fs.readFileSync('src/includes/index/section-category.html');
const sectionAbout = fs.readFileSync('src/includes/index/section-about.html');
const sectionProduct = fs.readFileSync('src/includes/index/section-product.html');
const sectionNews = fs.readFileSync('src/includes/index/section-news.html');
const sectionGaranty = fs.readFileSync('src/includes/index/section-garanty.html');
const sectionReview = fs.readFileSync('src/includes/index/section-review.html');
const sectionBenefits = fs.readFileSync('src/includes/index/section-benefits.html');
const sectionOrder = fs.readFileSync('src/includes/index/section-order.html');
const sectionSocial = fs.readFileSync('src/includes/index/section-social.html');
const sectionFooter = fs.readFileSync('src/includes/section-footer.html');
const temp = fs.readFileSync('src/includes/temp.html');

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Белый куб",
        head,
        sectionHeader,
        sectionIntro,
        sectionCategory,
        sectionAbout,
        sectionProduct,
        sectionNews,
        sectionGaranty,
        sectionReview,
        sectionBenefits,
        sectionOrder,
        sectionSocial,
        sectionFooter,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/about.html",
        filename: "about.html",
        inject: "body",
        title: "О заводе",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/vacancy.html",
        filename: "vacancy.html",
        inject: "body",
        title: "Вакансии",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/vacancy-full.html",
        filename: "vacancy-full.html",
        inject: "body",
        title: "Слесарь сборщик МК",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/garanty.html",
        filename: "garanty.html",
        inject: "body",
        title: "Сертификаты",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/video.html",
        filename: "video.html",
        inject: "body",
        title: "Видео",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/news.html",
        filename: "news.html",
        inject: "body",
        title: "Новости",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/news-detail.html",
        filename: "news-detail.html",
        inject: "body",
        title: "Изменение стоимости смеси для укладки блоков и плит",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/delivery.html",
        filename: "delivery.html",
        inject: "body",
        title: "Доставка",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/gallery-page.html",
        filename: "gallery-page.html",
        inject: "body",
        title: "Галерея",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/gallery-detail.html",
        filename: "gallery-detail.html",
        inject: "body",
        title: "Фото силикатных блоков",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/documentation.html",
        filename: "documentation.html",
        inject: "body",
        title: "Техническая информация",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/contacts.html",
        filename: "contacts.html",
        inject: "body",
        title: "Контакты",
        head,
        sectionHeader,
        sectionFooter,
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/map-detail.html",
        filename: "map-detail.html",
        inject: "body",
        title: "Где купить",
        head,
        sectionHeader,
        sectionFooter,
    }),
];