const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.scss', 'png'],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js',
        publicPath: '/',
    },
    // optimization: {
    //   minimize: true,
    //   runtimeChunk: true,
    //   splitChunks: {
    //     chunks: 'async',
    //     minSize: 1000,
    //     minChunks: 2,
    //     maxAsyncRequests: 5,
    //     maxInitialRequests: 3,
    //     name: true,
    //     cacheGroups: {
    //       default: {
    //         minChunks: 1,
    //         priority: -20,
    //         reuseExistingChunk: true,
    //       },
    //       vendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //       },
    //     },
    //   },
    //   minimizer: [
    //     new TerserPlugin({
    //       cache: true,
    //       parallel: true,
    //       sourceMap: true,
    //     }),
    //     new UglifyJsPlugin(),
    //     new OptimizeCSSAssetsPlugin({}),
    //   ],
    // },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name(file) {
                                return './[path][name].[ext]';
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    babelCore: '@babel/core', // needed for Babel v7
                },
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.ENV': JSON.stringify(process.env.ENV),
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: './src/images',
                to: 'images',
            },
            {
                from: './src/fonts',
                to: 'fonts',
            },
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[hash:8].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        port: 8110,
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
};
