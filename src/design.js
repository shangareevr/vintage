import './design.html';
import './design.scss';
import $ from "jquery";
window.jQuery = $;
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
require("@fancyapps/fancybox");

import './js/mask-number.js';
import { openBurger } from './js/openBurger.js';
openBurger();
import { closeBurger } from './js/closeBurger.js';
closeBurger();