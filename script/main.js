/* import data from "./accommodation.js" */

const calendar_date = document.querySelector('.calendar_date')
const date_select_box = document.querySelector('.date_select_box')
const user_search = document.querySelector('.user_search')
const search_ranking = document.querySelector('.search_ranking')
const num_view = document.querySelector('.num_view')
const num_select = document.querySelector('#num_select')
const user_select = document.querySelector('.user_select')
let hover = true
console.log(calendar_date,date_select_box,user_search,search_ranking,num_select,user_select)

// calendar_date.addEventListener('mouseover',()=>{
//     hover = !hover
//     console.log(hover)
//     if(hover === false){
//         calendar_date.style.backgroundColor = '#eeeeee';
//     }else{
//         calendar_date.style.backgroundColor = '#f5f5f5';
//     }
// })
user_search.addEventListener('click',()=>{
    search_ranking.style.display = 'block'
})

calendar_date.addEventListener('click',()=>{
    calendar_date.classList.add('input_active')
    date_select_box.style.display = 'block'
})

// 다른 곳 클릭하면 다시 비활성화 
document.addEventListener('click', function(event) {
    if (event.target !== calendar_date) {
        calendar_date.classList.remove('input_active')
        date_select_box.style.display = 'none'
    }
})

num_select.addEventListener('click',()=>{
    num_select.classList.add('input_active')
    user_select.style.display = 'block'
})
num_view.addEventListener('mouseover',()=>{
    hover = !hover
    console.log(hover)
    if(hover === false){
        num_view.style.backgroundColor = '#eeeeee';
        num_view.style.borderRadius = '10px';
    }else{
        num_view.style.backgroundColor = '#f5f5f5';
        num_view.style.borderRadius = '10px';
    }
})

calendar_date.addEventListener('mouseover',()=>{
    calendar_date.classList.add('hover')
})
calendar_date.addEventListener('mouseout',()=>{
    calendar_date.classList.remove('hover')
})

//스와이퍼
//이벤트
let swiperContainer = document.querySelector('.swiper-container')
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
function adjustSliderWidth() {
    const windowWidth = window.innerWidth;
    const isDesktop = windowWidth >= 900;
    swiperContainer.style.width = isDesktop ? '180%' : '100%';
}
// 페이지 로드 및 창 크기 변경 시 .swiper-container의 너비 조정 함수 호출
window.addEventListener('load', adjustSliderWidth);
window.addEventListener('resize', adjustSliderWidth);

//아래 슬라이드
let swiperContainer01 = document.querySelector('.swiper-container01')
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

let swiperContainer02 = document.querySelector('.swiper-container02')
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

let swiperContainer03 = document.querySelector('.swiper-container03')
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

let swiperContainer04 = document.querySelector('.swiper-container04')
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

let swiperContainer05 = document.querySelector('.swiper-container05')
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


// 데이터 삽입

/* function getAccommodationsByType(type){
    return data.filter(
        e => e.type === type)
}

const type_chk = document.querySelectorAll('.sub_menu') 

for(let menu_btn of type_chk){
    menu_btn.addEventListener('change',filterHandler)
}

function getChecked(name){
    const checked = []; // 결과 배열 / 체크한거만 들어가게
    const inputs = document.getElementsByClassName(name)[1].getElementsByTagName('input');
    for (const input of inputs) {
        if (input.checked) checked.push(input.value);
    }
    return checked
}

function filterHandler(){ 
    // 1. 사용자가 무엇을 선택했는지 name으로 확인해 배열로 가져온다.
    let checkedArray = getChecked('type')
    // 2. 위에서 가져온 배열로 데이터를 불러온다.
    const data = getAccommodationsByType(checkedArray)
    console.log(data);
    // 3. 위에서 불러온 데이터를 화면에 표시한다.
    const roomTemplate = document.querySelector('#room_template')
    const template_box = document.querySelector('.template_box')
    console.log(template_box)
    template_box.innerHTML = ''
    for(let e of data){
        const newRoom = document.importNode(roomTemplate.content, true)
        newRoom.querySelector('.type').innerText = e.type
        newRoom.querySelector('.name').innerText = e.name
        newRoom.querySelector('.city').innerText = e.city
        newRoom.querySelector('.more').innerText = e.location
        newRoom.querySelector('.point_view').innerText = `${e.rate}.${Math.floor(Math.random() * 9)}` 
        newRoom.querySelector('.review_count').innerText = (e.review_count).toLocaleString('ko-kr')
        newRoom.querySelector('.photo img').src = `./images/search/accommodation${e.pk}.jpg`
        console.log(`./images/search/accommodation${e.pk}.jpg`)
        // newRoom.querySelector('.price_view').innerText = e.price
        if(e.is_discount){
            newRoom.querySelector('.price_view').innerText = (e.price).toLocaleString('ko-kr')
        }else {
            newRoom.querySelector('.origin').style.display = 'none'
            newRoom.querySelector('.coupon').style.display = 'none'
        }
        newRoom.querySelector('.now').innerText = `${(e.price - (e.price*0.2)).toLocaleString('ko-kr')}원`
        if(e.stock > 10){
            newRoom.querySelector('.info').style.display = 'none'
            newRoom.querySelector('.info span').innerText = e.stock
        }
        template_box.appendChild(newRoom)
    }
} */