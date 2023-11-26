import './about.html';
import './about.scss';
const $ = require('jquery')
require("@fancyapps/fancybox");
import './js/mask-number.js';
import { openBurger } from './js/openBurger.js';
openBurger();
import { closeBurger } from './js/closeBurger.js';
closeBurger();
import { selectOpen, selectClose } from './js/select.js';
selectOpen();
selectClose();
import './js/slick.js';
$('.partners__slider').slick({
  accessibility: true,
  arrows:false,
  infinite: true,
  speed: 500,
  sliderScroll:1,
  useTransform:true,
  slidesToShow:6,
  centerMode: true,
  initialSlid:1,
  centerPadding: '0px',
  touchThreshold:10,
});