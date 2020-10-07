/* eslint-disable no-undef */
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000000000,
            outputPath: '../public/assets/',
            publicPath: 'assets/'
          },
        },
      });
      config.module.rules.push({
        test: /\.(jpe?g)$/i,
        loader: "file-loader",
        options: {
          outputPath: '../public/assets/', // if you don't use ../ it will put it inside ".next" folder by default
          publicPath: 'assets/',
        }
      });
      return config;
    },
  })
);
