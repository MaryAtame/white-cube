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
const paginationPage = fs.readFileSync('src/includes/pagination-page.html');
const articleCatalog = fs.readFileSync('src/includes/article-catalog.html');
const sidebarCatalog = fs.readFileSync('src/includes/sidebar-catalog.html');
const tabs = fs.readFileSync('src/includes/tabs.html');
const tableDelivery = fs.readFileSync('src/includes/table-delivery.html');
const article = fs.readFileSync('src/includes/article.html');
const articleDoc = fs.readFileSync('src/includes/article-doc.html');
const articleVacancy = fs.readFileSync('src/includes/article-vacancy.html');
const sidebarNews = fs.readFileSync('src/includes/sidebar-news.html');
const menuMobile = fs.readFileSync('src/includes/menu-mobile.html');

const calculation = fs.readFileSync('src/includes/modals/calculation.html');
const callback = fs.readFileSync('src/includes/modals/callback.html');
const feedback = fs.readFileSync('src/includes/modals/feedback.html');
const order = fs.readFileSync('src/includes/modals/order.html');
const success = fs.readFileSync('src/includes/modals/success.html');
const vacancyReply = fs.readFileSync('src/includes/modals/vacancy-reply.html');

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "?????????? ??????",
        head,
        sectionHeader,
        menuMobile,
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
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/about.html",
        filename: "about.html",
        inject: "body",
        title: "?? ????????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/vacancy.html",
        filename: "vacancy.html",
        inject: "body",
        title: "????????????????",
        head,
        sectionHeader,
        menuMobile,
        articleVacancy,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/vacancy-full.html",
        filename: "vacancy-full.html",
        inject: "body",
        title: "?????????????? ?????????????? ????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/garanty.html",
        filename: "garanty.html",
        inject: "body",
        title: "??????????????????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/video.html",
        filename: "video.html",
        inject: "body",
        title: "??????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        paginationPage,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/news.html",
        filename: "news.html",
        inject: "body",
        title: "??????????????",
        head,
        sectionHeader,
        menuMobile,
        paginationPage,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/news-detail.html",
        filename: "news-detail.html",
        inject: "body",
        title: "?????????????????? ?????????????????? ?????????? ?????? ?????????????? ???????????? ?? ????????",
        head,
        sectionHeader,
        menuMobile,
        sidebarNews,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/delivery.html",
        filename: "delivery.html",
        inject: "body",
        title: "????????????????",
        head,
        sectionHeader,
        menuMobile,
        tableDelivery,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/gallery-page.html",
        filename: "gallery-page.html",
        inject: "body",
        title: "??????????????",
        head,
        sectionHeader,
        menuMobile,
        paginationPage,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/gallery-detail.html",
        filename: "gallery-detail.html",
        inject: "body",
        title: "???????? ???????????????????? ????????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        paginationPage,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/documentation.html",
        filename: "documentation.html",
        inject: "body",
        title: "?????????????????????? ????????????????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        articleDoc,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/contacts.html",
        filename: "contacts.html",
        inject: "body",
        title: "????????????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/map-detail.html",
        filename: "map-detail.html",
        inject: "body",
        title: "?????? ????????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/review-detail.html",
        filename: "review-detail.html",
        inject: "body",
        title: "????????????",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        paginationPage,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/catalog.html",
        filename: "catalog.html",
        inject: "body",
        title: "??????????????",
        head,
        sectionHeader,
        menuMobile,
        sidebarCatalog,
        article,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/catalog-category.html",
        filename: "catalog-category.html",
        inject: "body",
        title: "??????????????. ?????????? ??????????????????",
        head,
        sectionHeader,
        menuMobile,
        sidebarCatalog,
        articleCatalog,
        paginationPage,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/catalog-item.html",
        filename: "catalog-item.html",
        inject: "body",
        title: "?????????? ???????????????????????????? ???????? ??125-??150/1,6 498??115??249",
        head,
        sectionHeader,
        menuMobile,
        tabs,
        tableDelivery,
        articleCatalog,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),

    new HtmlWebpackPlugin({
        template: "./src/pages/404.html",
        filename: "404.html",
        inject: "body",
        title: "404",
        head,
        sectionHeader,
        menuMobile,
        sectionFooter,
        success,
        calculation,
        callback,
        feedback,
        order,
        vacancyReply,
        temp
    }),
];