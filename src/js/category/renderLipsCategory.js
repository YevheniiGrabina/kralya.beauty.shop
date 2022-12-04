import { refs } from '../refs';

refs.lips.addEventListener('click', onLipsBtnClick);


export function onLipsBtnClick() {
    refs.shopSection.classList.add('visually-hidden');
    refs.newSection.classList.add('visually-hidden');
    refs.newTitle.classList.add('visually-hidden');
    refs.liderTitle.classList.add('visually-hidden');
    refs.lipsSection.classList.remove('visually-hidden');
    refs.callbackSection.classList.add('visually-hidden');
    refs.news.classList.add('visually-hidden');
}