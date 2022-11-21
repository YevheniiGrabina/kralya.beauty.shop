import './sass/main.scss';
import './js/mobile-menu.js';
import './js/modal.js';
import './js/slider.js';


import { refs } from './js/refs';


import { onHairBtnClick } from './js/hairCategory';
import { onBoxBtnClick } from './js/boxCategory';
import { onGiftsBtnClick } from './js/giftsCategory';


refs.hair.addEventListener('click', onHairBtnClick);
refs.box.addEventListener('click', onBoxBtnClick);
refs.gifts.addEventListener('click', onGiftsBtnClick);





