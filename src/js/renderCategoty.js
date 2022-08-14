import { refs } from './refs';

refs.face.addEventListener('click', onFaceBtnClick);


function onFaceBtnClick() {
    refs.shopSection.classList.add('visually-hidden');
  refs.liderSection.classList.add('visually-hidden');
  refs.newSection.classList.add('visually-hidden');
  refs.faceSection.classList.remove('visually-hidden');

}