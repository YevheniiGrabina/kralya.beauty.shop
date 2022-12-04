import './sass/main.scss';
import './js/simplebar';
import './js/product';
import './js/modal';
import './js/mobile-menu';
import './js/slider';
import './js/cart';


    import { refs } from './js/refs';


    import { onHairBtnClick } from './js/category/hairCategory';
    import { onBoxBtnClick } from './js/category/boxCategory';
    import { onGiftsBtnClick } from './js/category/giftsCategory';
    import { onFaceBtnClick } from './js/category/renderFaceCategory';
    import { onBodyBtnClick } from './js/category/renderBodyCategory';
    import { onLipsBtnClick } from './js/category/renderLipsCategory';
    


    refs.face.addEventListener('click', onFaceBtnClick);
    refs.body.addEventListener('click', onBodyBtnClick);
    refs.lips.addEventListener('click', onLipsBtnClick);
    refs.hair.addEventListener('click', onHairBtnClick);
    refs.box.addEventListener('click', onBoxBtnClick);
    refs.gifts.addEventListener('click', onGiftsBtnClick);

    




