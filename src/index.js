import './index.html';
import './index.scss';
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