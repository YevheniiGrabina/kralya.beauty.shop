new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 20,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        loopedSlides: 7,
        watchSlidesVisibility: true,
        breakpoints: {
 
            768: {
                slidesPerView:3,
                spaceBetween: 30,
            },
            480: {
                slidesPerView:6,
                spaceBetween: 20,
            }
        }
    });