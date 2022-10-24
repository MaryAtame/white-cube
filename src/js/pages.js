const fs = require('fs');
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Includes
const head = fs.readFileSync('src/includes/head.html');
const sectionHeader = fs.readFileSync('src/includes/section-header.html');
const sectionIntro = fs.readFileSync('src/includes/section-intro.html');
const sectionCategory = fs.readFileSync('src/includes/section-category.html');
const sectionAbout = fs.readFileSync('src/includes/section-about.html');
const sectionProduct = fs.readFileSync('src/includes/section-product.html');
const sectionNews = fs.readFileSync('src/includes/section-news.html');
const sectionGaranty = fs.readFileSync('src/includes/section-garanty.html');
const sectionReview = fs.readFileSync('src/includes/section-review.html');
const sectionBenefits = fs.readFileSync('src/includes/section-benefits.html');
const sectionOrder = fs.readFileSync('src/includes/section-order.html');
const sectionSocial = fs.readFileSync('src/includes/section-social.html');
const sectionFooter = fs.readFileSync('src/includes/section-footer.html');
// const temp = fs.readFileSync('src/includes/temp.html');

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
];