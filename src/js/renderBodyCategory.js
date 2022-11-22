import { refs } from './refs';

refs.body.addEventListener('click', onBodyBtnClick);


export function onBodyBtnClick() {
    refs.shopSection.classList.add('visually-hidden');
    refs.newSection.classList.add('visually-hidden');
    refs.newTitle.classList.add('visually-hidden');
    refs.liderTitle.classList.add('visually-hidden');
    refs.bodySection.classList.remove('visually-hidden');
    refs.callbackSection.classList.add('visually-hidden');
    refs.news.classList.add('visually-hidden');
}