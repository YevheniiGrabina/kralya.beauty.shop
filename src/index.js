import './sass/main.scss';
import './js/modal.js';
import './js/mobile-menu';
import './js/slider.js';
import './js/product';
import './js/simplebar';
import './js/cart';


    import { refs } from './js/refs';


    import { onHairBtnClick } from './js/hairCategory';
    import { onBoxBtnClick } from './js/boxCategory';
    import { onGiftsBtnClick } from './js/giftsCategory';
    import { onFaceBtnClick } from './js/renderFaceCategory';
    import { onBodyBtnClick } from './js/renderBodyCategory';
    import { onLipsBtnClick } from './js/renderLipsCategory';
    


    refs.face.addEventListener('click', onFaceBtnClick);
    refs.body.addEventListener('click', onBodyBtnClick);
    refs.lips.addEventListener('click', onLipsBtnClick);
    refs.hair.addEventListener('click', onHairBtnClick);
    refs.box.addEventListener('click', onBoxBtnClick);
    refs.gifts.addEventListener('click', onGiftsBtnClick);

    




