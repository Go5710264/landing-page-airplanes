const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 9000,
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: path.join('asset', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|webp|jpeg|cur|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/massage-chairs.html',
      filename: './massage-chairs.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/daily-massage.html',
      filename: './daily-massage.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/beauty-academy.html',
      filename: './beauty-academy.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/hair-styler.html',
      filename: './hair-styler.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/rf-lifting.html',
      filename: './rf-lifting.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/rf-eye-lifting.html',
      filename: './rf-eye-lifting.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/ems-vacuum.html',
      filename: './ems-vacuum.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/beauty-boxes.html',
      filename: './beauty-boxes.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/headband.html',
      filename: './headband.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/fitness-room.html',
      filename: './fitness-room.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/max-pro.html',
      filename: './max-pro.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/fitness-bike.html',
      filename: './fitness-bike.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/elliptic.html',
      filename: './elliptic.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/ya-rower-sport.html',
      filename: './ya-rower-sport.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/vibro-plate.html',
      filename: './vibro-plate.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/for-travel.html',
      filename: './for-travel.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/air-travel.html',
      filename: './air-travel.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/galaxy-eye.html',
      filename: './galaxy-eye.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/aqua-balance-mini.html',
      filename: './aqua-balance-mini.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/yoki-mini.html',
      filename: './yoki-mini.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
