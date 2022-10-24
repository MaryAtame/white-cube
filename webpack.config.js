// const fs = require('fs');
const path = require('path');


const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = require('./src/js/pages');

// Includes
// const head = fs.readFileSync(__dirname + '/src/includes/head.html');
// const sectionHeader = fs.readFileSync(__dirname + '/src/includes/section-header.html');
// const sectionFooter = fs.readFileSync(__dirname + '/src/includes/section-footer.html');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "./docs"),
        filename: "js/bundle.js",
    },
    devtool: false,
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
        },
        client: {
            overlay: true,
            progress: true,
        },
        open: true,
        watchFiles: ["src/includes/*.html", "src/*.html", "src/pages/*.html", "src/css/*.css"],
        hot: true,
        compress: false,
        port: 9000,
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, "./src/index.html"),
        //     filename: "index.html",
        //     inject: "body",
        //     title: "Dranik",
        //     head,
        //     sectionHeader,
        //     sectionFooter
        // }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, "./src/pages/page.html"),
        //     filename: "page.html",
        //     inject: "body",
        //     title: "Title child page | Dranik",
        //     head,
        //     sectionHeader,
        //     sectionFooter
        // }),
        ...pages,
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                '!.git',
            ],
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/images",
                    to: "./assets/images/",
                    noErrorOnMissing: true
                },
                {
                    from: "src/assets/favicons",
                    to: "./assets/favicons/",
                    noErrorOnMissing: true
                },
                {
                    from: "src/assets/fonts",
                    to: "./assets/fonts/",
                    noErrorOnMissing: true
                },
            ],
        }),
        new SpriteLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/inline",
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'sprite.svg',
                    publicPath: '/assets/sprite/'
                }
            }
        ],
    },
};