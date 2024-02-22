let swiper = new Swiper('#r_tab', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 6,
   // 슬라이드 사이의 간격
    spaceBetween: 10,
   // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    // navigation: {
    //     nextEl: ".swiper-button-next04",
    //     prevEl: ".swiper-button-prev04",
    // },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
   // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    }
},
})