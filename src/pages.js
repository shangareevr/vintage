import './pages.html';
import './pages.scss';
import $ from "jquery";
window.jQuery = $;
require("@fancyapps/fancybox");
import './js/mask-number.js';
import { openBurger } from './js/openBurger.js';
openBurger();
import { closeBurger } from './js/closeBurger.js';
closeBurger();

import './js/slick.js';
$('.slider__section').slick({
  prevArrow: $('.slider__prev'),
  nextArrow: $('.slider__next'),
  infinite: true,
  respondTo: 'min',
  variableWidth:true,
  speed: 500,
  sliderScroll:1,
  useTransform:true,
});