import { refs } from './refs';

refs.gifts.addEventListener('click', onGiftsBtnClick);


export function onGiftsBtnClick() {
    refs.shopSection.classList.add('visually-hidden');
    refs.newSection.classList.add('visually-hidden');
    refs.newTitle.classList.add('visually-hidden');
    refs.liderTitle.classList.add('visually-hidden');
    refs.giftSection.classList.remove('visually-hidden');
    refs.callbackSection.classList.add('visually-hidden');
    refs.news.classList.add('visually-hidden');
}