(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function i(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",i),e.closeModalBtn.addEventListener("click",i)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function i(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",i),e.closeMenuBtn.addEventListener("click",i)})(),new Swiper(".image-slider",{navigation:{nextEl:".swiper-button-prev",prevEl:".swiper-button-next"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{1199:{spaceBetween:15},768:{spaceBetween:20},390:{spaceBetween:30}},autoHeight:!0,slidesPerView:0,loop:!0});const e={bodyEl:document.querySelector("body"),header:document.querySelector(".header"),logo:document.querySelector(".js-logo-btn"),formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form__input"),shopSection:document.querySelector(".slider-container"),newSection:document.querySelector(".new-shop-category"),liderSection:document.querySelector(".lider-shop-category"),face:document.querySelector(".js-nav-face-btn"),faceSection:document.querySelector(".for-face"),bodySection:document.querySelector(".for-body"),lipsSection:document.querySelector(".for-lips"),hairSection:document.querySelector(".for-hair"),boxSection:document.querySelector(".box-section"),giftSection:document.querySelector(".gift-s"),footer:document.querySelector(".footer"),main:document.querySelector(".main"),liderTitle:document.querySelector(".lider-title"),newTitle:document.querySelector(".new-title"),callbackSection:document.querySelector(".callback-section"),news:document.querySelector(".news"),body:document.querySelector(".js-nav-body-btn"),lips:document.querySelector(".js-nav-lips-btn"),hair:document.querySelector(".js-nav-hair-btn"),box:document.querySelector(".js-nav-box-btn"),gifts:document.querySelector(".js-nav-gifts-btn")};function i(){e.shopSection.classList.add("visually-hidden"),e.newSection.classList.add("visually-hidden"),e.newTitle.classList.add("visually-hidden"),e.liderTitle.classList.add("visually-hidden"),e.hairSection.classList.remove("visually-hidden"),e.callbackSection.classList.add("visually-hidden"),e.news.classList.add("visually-hidden")}function d(){e.shopSection.classList.add("visually-hidden"),e.newSection.classList.add("visually-hidden"),e.newTitle.classList.add("visually-hidden"),e.liderTitle.classList.add("visually-hidden"),e.boxSection.classList.remove("visually-hidden"),e.callbackSection.classList.add("visually-hidden"),e.news.classList.add("visually-hidden")}function l(){e.shopSection.classList.add("visually-hidden"),e.newSection.classList.add("visually-hidden"),e.newTitle.classList.add("visually-hidden"),e.liderTitle.classList.add("visually-hidden"),e.giftSection.classList.remove("visually-hidden"),e.callbackSection.classList.add("visually-hidden"),e.news.classList.add("visually-hidden")}function t(){e.shopSection.classList.add("visually-hidden"),e.newSection.classList.add("visually-hidden"),e.newTitle.classList.add("visually-hidden"),e.liderTitle.classList.add("visually-hidden"),e.faceSection.classList.remove("visually-hidden"),e.callbackSection.classList.add("visually-hidden"),e.news.classList.add("visually-hidden")}function s(){e.shopSection.classList.add("visually-hidden"),e.newSection.classList.add("visually-hidden"),e.newTitle.classList.add("visually-hidden"),e.liderTitle.classList.add("visually-hidden"),e.bodySection.classList.remove("visually-hidden"),e.callbackSection.classList.add("visually-hidden"),e.news.classList.add("visually-hidden")}function n(){e.shopSection.classList.add("visually-hidden"),e.newSection.classList.add("visually-hidden"),e.newTitle.classList.add("visually-hidden"),e.liderTitle.classList.add("visually-hidden"),e.lipsSection.classList.remove("visually-hidden"),e.callbackSection.classList.add("visually-hidden"),e.news.classList.add("visually-hidden")}e.hair.addEventListener("click",i),e.box.addEventListener("click",d),e.gifts.addEventListener("click",l),e.face.addEventListener("click",t),e.body.addEventListener("click",s),e.lips.addEventListener("click",n),e.face.addEventListener("click",t),e.body.addEventListener("click",s),e.lips.addEventListener("click",n),e.hair.addEventListener("click",i),e.box.addEventListener("click",d),e.gifts.addEventListener("click",l);
//# sourceMappingURL=index.93d65092.js.map
