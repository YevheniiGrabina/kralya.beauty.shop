import { refs } from './refs';

refs.face.addEventListener('click', onFaceBtnClick);


function onFaceBtnClick() {
    refs.shopSection.classList.add('visually-hidden');
    refs.newSection.classList.add('visually-hidden');
    refs.newTitle.classList.add('visually-hidden');
    refs.liderTitle.classList.add('visually-hidden');
    refs.faceSection.classList.remove('visually-hidden');
    refs.callbackSection.classList.add('visually-hidden');
    refs.news.classList.add('visually-hidden');
}