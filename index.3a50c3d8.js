(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),new Swiper(".swiper-container",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:20,centeredSlides:!0,spaceBetween:30,loop:!0,loopedSlides:7,watchSlidesVisibility:!0,breakpoints:{768:{slidesPerView:3,spaceBetween:30},480:{slidesPerView:6,spaceBetween:20}}});
//# sourceMappingURL=index.3a50c3d8.js.map