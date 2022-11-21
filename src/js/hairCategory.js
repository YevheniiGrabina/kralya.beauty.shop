import { refs } from './refs';

refs.hair.addEventListener('click', onHairBtnClick);


function onHairBtnClick() {
    refs.shopSection.classList.add('visually-hidden');
    refs.newSection.classList.add('visually-hidden');
    refs.newTitle.classList.add('visually-hidden');
    refs.liderTitle.classList.add('visually-hidden');
    refs.hairSection.classList.remove('visually-hidden');
    refs.callbackSection.classList.add('visually-hidden');
    refs.news.classList.add('visually-hidden');
}