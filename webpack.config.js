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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};