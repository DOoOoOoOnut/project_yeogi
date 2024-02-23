// 첫 번째 지도 초기화
var map1 = new naver.maps.Map('map1', {
    center: new naver.maps.LatLng(37.5665, 126.9780),
    zoom: 10
});

// 두 번째 지도 초기화
var map2 = new naver.maps.Map('map2', {
    center: new naver.maps.LatLng(37.4824, 127.0390),
    zoom: 12
});


let swiper = new Swiper('#view_container', {
     // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
         // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
    // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 1,
        spaceBetween: 25,
        slidesPerGroup: 1,
        centeredSlides : false,
    }
},
})

let swiper02 = new Swiper('#thum_review_contents', {
     // 한 번에 보여줄 슬라이드 수
    // slidesPerView: 2,
    // // 슬라이드 사이의 간격
    // spaceBetween: 10,
    // // 한 번에 넘길 슬라이드 수
    // slidesPerGroup: 1,
    // centeredSlides : true,
    navigation: {
        nextEl: ".swiper-button-next02",
        prevEl: ".swiper-button-prev02",
    },
    breakpoints: {
         // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
    // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 1.5,
        spaceBetween: 25,
        slidesPerGroup: 1,
        centeredSlides : false,
    }
},
})

let swiper03 = new Swiper('#thum_photo', {
     // 한 번에 보여줄 슬라이드 수
    slidesPerView: 5.5,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    navigation: {
        nextEl: ".swiper-button-next03",
        prevEl: ".swiper-button-prev03",
    },
    breakpoints: {
         // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
        slidesPerView: 5.5,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
    // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 5.5,
        spaceBetween: 25,
        slidesPerGroup: 1,
        centeredSlides : false,
    }
},
})


let swiper04 = new Swiper('#room_type', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 4,
   // 슬라이드 사이의 간격
    spaceBetween: 10,
   // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    navigation: {
        nextEl: ".swiper-button-next04",
        prevEl: ".swiper-button-prev04",
    },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
   // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    }
},
})

let swiper05 = new Swiper('#event_bnr', {
    // 한 번에 보여줄 슬라이드 수
<<<<<<< HEAD
    //slidesPerView: 1,
   // 슬라이드 사이의 간격
    spaceBetween: 10,
   // 한 번에 넘길 슬라이드 수
    //slidesPerGroup: 1,
    //centeredSlides : true,
    loop : true,
    autoplay :{delay:2000,},
    pagination: {
        el: '#event_bnr .swiper-pagination',
        type:'bullets',
        clickable:true,
    },
=======
    slidesPerView: 1,
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
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
   // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    }
},
>>>>>>> 0e632e8351477ceb81e0a9722f6555081017fe27
})