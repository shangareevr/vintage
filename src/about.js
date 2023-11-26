import './about.html';
import './style/about.css';
// import './about.scss';
import $ from "jquery";
window.jQuery = $;
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
require("@fancyapps/fancybox");