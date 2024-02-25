const photo01 = document.querySelector ('.left') 
const photo02 = document.querySelector ('.box')
const allphoto = document.querySelector ('.more_photo')
const view = document.querySelector ('.room_view_box')

console.log (photo01, photo02, allphoto, view)

allphoto.addEventListener ('click', ()=>{
    view.computedStyleMap.display = 'block'
})

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
    //slidesPerView: 1,
   // 슬라이드 사이의 간격
    spaceBetween: 10,
   // 한 번에 넘길 슬라이드 수
    //slidesPerGroup: 1,
    //centeredSlides : true,
    loop : true,
    autoplay :{delay:2000,},
    pagination: {
        el: '#event_bnr .page',
        type:'bullets',
        clickable:true,
    },
})

var mapOptions = {
    center: new naver.maps.LatLng(33.2471631, 126.4079553), // 지도의 초기 중심 좌표
    zoom: 15// 지도의 초기 확대 레벨
};

var map = new naver.maps.Map('map2', mapOptions); // 지도 생성

var markerOptions = {
    position: new naver.maps.LatLng(33.2471631, 126.4079553), // 마커의 위치
    map: map2 // 마커를 표시할 지도 객체
};

var marker = new naver.maps.Marker(markerOptions); // 마커 생성

var mapOptions = {
    center: new naver.maps.LatLng(33.2471631, 126.4079553), // 지도의 초기 중심 좌표
    zoom: 15// 지도의 초기 확대 레벨
};

var map = new naver.maps.Map('map1', mapOptions); // 지도 생성

var markerOptions = {
    position: new naver.maps.LatLng(33.2471631, 126.4079553), // 마커의 위치
    map: map1 // 마커를 표시할 지도 객체
};

var marker = new naver.maps.Marker(markerOptions); // 마커 생성