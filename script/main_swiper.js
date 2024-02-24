//스와이퍼
//이벤트
let swiper = new Swiper('.swiper-container', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 2,
    // 슬라이드 사이의 간격
    spaceBetween: 15,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay:3000,},
    centeredSlides : true,
    pagination: {
        el: '.swiper-pagination',
        type:'bullets',
        clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3,
            centeredSlides : false,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
        centeredSlides : false,
        }
    },
})

// 브라우저 창 크기에 따라 .swiper-container의 너비를 조정하는 함수
// function adjustSliderWidth() {
//     const windowWidth = window.innerWidth;
//     const isDesktop = windowWidth >= 900;
//     swiperContainer.style.width = isDesktop ? '180%' : '100%';
// }
// 페이지 로드 및 창 크기 변경 시 .swiper-container의 너비 조정 함수 호출
// window.addEventListener('load', adjustSliderWidth);
// window.addEventListener('resize', adjustSliderWidth);

//아래 슬라이드
let swiper01 = new Swiper('.swiper-container01', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 5,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 6,  
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next01",
        prevEl: ".swiper-button-prev01",
    },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 6,
        spaceBetween: 25,
        }
    },
})

let swiper02 = new Swiper('.swiper-container02', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 5,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 6,   
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next02",
        prevEl: ".swiper-button-prev02",
    },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 6,
        spaceBetween: 25,
        }
    },
})

let swiper03 = new Swiper('.swiper-container03', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 3.5,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 4,
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next03",
        prevEl: ".swiper-button-prev03",
    },
    breakpoints: {
        // 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 4,
        spaceBetween: 25,
        }
    },
})

let swiper04 = new Swiper('.swiper-container04', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 3.5,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 4,
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next04",
        prevEl: ".swiper-button-prev04",
    },
    breakpoints: {
        // 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 4,
        spaceBetween: 25,
        }
    },
})

let swiper05 = new Swiper('.swiper-container05', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 3.5,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 4,
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next05",
        prevEl: ".swiper-button-prev05",
    },
    breakpoints: {
        // 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 4,
        spaceBetween: 25,
        }
    },
})

let swiper06 = new Swiper('.swiper-container06', {
    // loop: true,
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 2,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 4,
    // autoplay: {delay: 2000,},   
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next06",
        prevEl: ".swiper-button-prev06",
    },
    breakpoints: {
        // 화면 너비가 800 이상일 때(min-width 기준)
        600: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 4,
        spaceBetween: 25,
        }
    },
})
