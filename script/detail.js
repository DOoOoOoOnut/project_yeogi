// 메뉴 클릭
const body = document.querySelector('html, body')
const move = document.querySelectorAll ('.main_menu > .move')
const link_contents = document.querySelectorAll('.link_contents')
// const title1 = document.querySelector ('.room')
// const title2 = document.querySelector ('.additional')
// const title3 = document.querySelector ('.room_type')
// const title4 = document.querySelector ('.location_box')
// const title5 = document.querySelector ('.real_review')
// console.log (move, link_contents)

move[0].classList.add('active');

// 버튼 누르면 스크롤 이동
window.addEventListener('scroll', () => {
    move.forEach((obj, idx) => {
        if (body.scrollTop >= link_contents[idx].offsetTop - 100) {
            move_remove();
            hide()
            obj.classList.add('main_move');
            obj.classList.add('active');
        }
    });
});

const move_remove = () => {
    for (let i of move) {
        i.classList.remove('main_move');
    }
}
const hide = () => {
    for (let i of move) {
        i.classList.remove('active');
    }
}

move.forEach((t, i) => {
    t.addEventListener('click', (e) => {
        console.log(t)
        e.preventDefault();
        window.scrollTo(0, link_contents[i].offsetTop - 50);
    });
});


// 포토 썸네일

const photo_bg = document.querySelector ('.room_view_box .bg')
const photo01 = document.querySelector ('.main_ph') 
const photo02 = document.querySelector ('.sub_ph')
const allphoto = document.querySelector ('.more_photo')
const view = document.querySelector ('.room_view_box')
const imgcontainer = document.querySelector ('.imgcontainer')


// const body_all_a = document.querySelectorAll ('body a')
// // console.log(body_all_a)


// for(let j of body_all_a){
//     // console.log(j)
//     j.addEventListener('click',(e)=>{
//         e.preventDefault()
//     })
// }



console.log (photo01, photo02, allphoto, view, photo_bg, imgcontainer)

photo_bg.style.display = 'none'

allphoto.addEventListener ('click', function(){
    photo_bg.style.display = 'flex'
    imgcontainer.style.display = 'block'
})

photo01.addEventListener ('click', function(){
    photo_bg.style.display = 'flex'
    imgcontainer.style.display = 'block'
})

photo02.addEventListener ('click',function(){
    photo_bg.style.display = 'flex'
    imgcontainer.style.display = 'block'
})

// 주소복사

const address_copy = document.querySelector ('.address_copy')
const add_copy = document.querySelector ('.add_copy')
const addresss_copy = document.querySelector ('#addresss_copy')
const address_copys = document.querySelector ('.address_copys')
console.log (address_copy, add_copy, address_copys)

address_copy.style.display = 'none'
address_copys.style.display = 'none'

add_copy.addEventListener ('click',function(){
    address_copy.style.display = 'block'
    setTimeout(function() {
        address_copy.style.display = "none";
    }, 2000);
})

addresss_copy.addEventListener ('click', function(){
    address_copys.style.display = 'block'
    setTimeout(function() {
        address_copys.style.display = "none";
    }, 2000);
})

// 리뷰보러가기

const all_review = document.querySelector ('.all_review')
const review_title = document.querySelector ('.review_title')

all_review.addEventListener('click',()=>{
    console.log(review_title.offsetTop)
    window.scrollTo(0, review_title.offsetTop)
})

// 쿠폰복사

const coupon_box = document.querySelector ('.coupon_box')
const coupon_bg = document.querySelector ('.coupon_service .bg')
const coupon_get = document.querySelector ('.coupon_get')

console.log (coupon_box, coupon_bg, coupon_get)

coupon_bg.style.display = 'none'
coupon_box.style.display = 'none'

coupon_get.addEventListener ('click',function(){
    coupon_bg.style.display = 'flex'
    coupon_box.style.display = 'block'
})

// 부대시설
const service_container = document.querySelector ('.service_container')
const service_bg = document.querySelector ('.service_wrap .bg')
const more_service = document.querySelector ('.more_service')

console.log (service_container, service_bg, more_service)

service_bg.style.display = 'none'
service_container.style.display = 'none'

more_service.addEventListener ('click',function(e){
    service_bg.style.display = 'flex'
    service_container.style.display = 'block'
    e.preventDefault ()
})

//결제혜택안내

const pay_benefit_bg = document.querySelector ('.pay_benefit .bg')
const pay_benefit_container = document.querySelector ('.pay_benefit_container')
const more_benefit = document.querySelector ('.more_benefit')

console.log (more_benefit, pay_benefit_bg, pay_benefit_container)

pay_benefit_bg.style.display = 'none'
pay_benefit_container.style.display = 'none'

more_benefit.addEventListener('click',function(e){
    pay_benefit_bg.style.display = 'flex'
    pay_benefit_container.style.display = 'block'
    e.preventDefault()
})
//지도
//side 지도보기
const in_map = document.querySelector ('#in_map')
const map_popup_bg = document.querySelector ('#map_popup .bg')
const map_pop = document.querySelector ('#map1')
const plus = document.querySelector ('#plus')

console.log (in_map, map_popup_bg, map_pop, plus)

map_popup_bg.style.display = 'none'
map_pop.style.display = 'none'

in_map.addEventListener('click', function(e){
    map_popup_bg.style.display = 'flex'
    map_pop.style.display = 'block'
    e.preventDefault ()
})

plus.addEventListener('click', function(e){
    map_popup_bg.style.display = 'flex'
    map_pop.style.display = 'block'
    e.preventDefault ()
})

//반응형 지도보기

const mini_map_view = document.querySelector ('.mini_map_view')

mini_map_view.addEventListener ('click', function(e){
    map_popup_bg.style.display = 'flex'
    map_pop.style.display = 'block'
    e.preventDefault ()
})

// 판매자 정보

const seller_wrap_bg = document.querySelector ('.seller_wrap .bg')
const seller_box = document.querySelector ('.seller_box')
const seller = document.querySelector ('.seller')

console.log (seller_wrap_bg, seller_box, seller)

seller_wrap_bg.style.display = 'none'
seller_box.style.display = 'none'

seller.addEventListener('click', function(e){
    seller_wrap_bg.style.display = 'flex'
    seller_box.style.display = 'block'
    e.preventDefault()
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

let swiperContainer =document.querySelector('#view_container')
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

let swiperContainer01 =document.querySelector('.sub_photo')
let swiper01 = new Swiper('.sub_photo', {
     // 한 번에 보여줄 슬라이드 수
    slidesPerView: 12.5,
    // 슬라이드 사이의 간격
    spaceBetween: 5,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    breakpoints: {
         // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
        slidesPerView: 12.5,
        spaceBetween: 5,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
    // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 12.5,
        spaceBetween: 5,
        slidesPerGroup: 1,
        centeredSlides : false,
    }
},
})

let swiper02 = new Swiper('#thum_review_contents', {
     // 한 번에 보여줄 슬라이드 수
    // slidesPerView: 2,
    // // 슬라이드 사이의 간격
    spaceBetween: 15,
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
    slidesPerView: 5,
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
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
    },
    // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 5,
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

let swiperContainer05 =document.querySelector('#event_bnr')
let swiper05 = new Swiper('#event_bnr', {
    // 한 번에 보여줄 슬라이드 수
    //slidesPerView: 1,
   // 슬라이드 사이의 간격
    spaceBetween: 16,
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

