const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[name][ext]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src", "html/index.html"),
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'carier.html',
        //     template: path.resolve(__dirname, "src", "html/carier.html"),
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'feedback.html',
        //     template: path.resolve(__dirname, "src", "html/feedback.html"),
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'politis.html',
        //     template: path.resolve(__dirname, "src", "html/politis.html"),
        // }),
        // new HtmlWebpackPlugin({
        //     filename: '404.html',
        //     template: path.resolve(__dirname, "src", "html/404.html"),
        // }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new CleanWebpackPlugin(),
        // new CopyPlugin({
        //   patterns: [{ from: 'static', to: './' }],
        // }),
        new HtmlWebpackPugPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("postcss-preset-env")],
                            },
                        },
                    },
                    "group-css-media-queries-loader",
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.woff2?$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                },
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg|mp4|webm)$/i,
                use: devMode
                    ? []
                    : [
                          {
                              loader: "image-webpack-loader",
                              options: {
                                  mozjpeg: {
                                      progressive: true,
                                  },
                                  optipng: {
                                      enabled: false,
                                  },
                                  pngquant: {
                                      quality: [0.65, 0.9],
                                      speed: 4,
                                  },
                                  gifsicle: {
                                      interlaced: false,
                                  },
                                  webp: {
                                      quality: 75,
                                  },
                              },
                          },
                      ],
                type: "asset/resource",
            },
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
