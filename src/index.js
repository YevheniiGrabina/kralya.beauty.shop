import './sass/main.scss';
import './js/mobile-menu.js';
import './js/modal.js';
import './js/slider.js';

import { refs } from './js/refs';
import { onFaceBtnClick } from './js/renderFaceCategory';
import { onBodyBtnClick } from './js/renderBodyCategory';
import { onLipsBtnClick } from './js/renderLipsCategory';
import { onHairBtnClick } from './js/hairCategory';
import { onBoxBtnClick } from './js/boxCategory';
import { onGiftsBtnClick } from './js/giftsCategory';

refs.face.addEventListener('click', onFaceBtnClick);
refs.body.addEventListener('click', onBodyBtnClick);
refs.lips.addEventListener('click', onLipsBtnClick);
refs.hair.addEventListener('click', onHairBtnClick);
refs.box.addEventListener('click', onBoxBtnClick);
refs.gifts.addEventListener('click', onGiftsBtnClick);





