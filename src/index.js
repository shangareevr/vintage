import './index.html';
import './index.scss';
// import {openPortfolio} from './js/openPortfolio.js';
// openPortfolio();
const $ = require('jquery')
require("@fancyapps/fancybox");
import './js/mask-number.js';
import { openBurger } from './js/openBurger.js';
openBurger();
import { closeBurger } from './js/closeBurger.js';
closeBurger();
// import { openModal } from './js/openModal.js';
// openModal();

// plugins: [
//   new HtmlWebpackPlugin({
//     template: path.resolve(__dirname, 'src', 'index.html'),
//     filename: 'index.html',
//   }),
//   new HtmlWebpackPlugin({
//     template: path.resolve(__dirname, 'src', 'services.html'),
//     filename: 'services.html',
//   }),
//   new HtmlWebpackPlugin({
//     template: path.resolve(__dirname, 'src', 'design.html'),
//     filename: 'design.html',
//   }),
//   new MiniCssExtractPlugin({
//     filename: '[name].[contenthash].css',
//   }),
//   new webpack.ProvidePlugin({
//     identifier: path.resolve(path.join(__dirname, 'src/module1')),
//     $: 'jquery',
//      jQuery: 'jquery',
//   }),
// ],