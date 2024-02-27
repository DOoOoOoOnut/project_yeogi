import { getAccommodationsByType } from '/data/data.js';

const userSearch = document.querySelector('.user_search')
const searchInput = document.querySelector('#search_input')
const searchRanking = document.querySelector('.search_ranking')
const calendarDate = document.querySelector('.calendar_detail')
const dateSelectBox = document.querySelector('.date_select_box')
const numView = document.querySelector('.num_view')
const numSelect = document.querySelector('#num_select')
const userSelect = document.querySelector('.num_detail .user_select')
const search_small = document.querySelector('.search_small')
const main_popup = document.querySelector('.main_popup')
const search_before = document.querySelector('.search_before')
const search_change = search_before.querySelector('.change')
const search_after = document.querySelector('.search_after')
const search_popup = document.querySelector('.search_popup')
const search_popup_back = document.querySelector('.search_popup .back')
const user_search_detail_m = document.querySelector('.user_search_detail_m')
const travel_search = document.querySelector('.travel_search')
const back_btn = document.querySelector('.close_btn')
const room_btn = document.querySelectorAll('.room_btn')
const room_btn_m = document.querySelectorAll('.room_btn_m')
const more_btn = document.querySelector('.more_btn')
const sub_menu_list = document.querySelector('.sub_menu_list')
const i_rotate = document.querySelector('.more_btn i[class*=down]')
let hover = true
// console.log(calendarDate,dateSelectBox,userSearch,searchRanking,numSelect,userSelect)
console.log(sub_menu_list,i_rotate)

let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

// 국내 숙소 검색 영역
userSearch.addEventListener('click',()=>{
    searchRanking.style.display = 'block'
})
// 국내 숙소 검색 input 벗어났을 시 숨기기
searchInput.addEventListener('blur',()=>{
    searchRanking.style.display = 'none'
})

search_before.addEventListener('click',()=>{
    search_after.style.display = 'block'
    search_before.style.display = 'none'
})

search_change.addEventListener('click',()=>{
    search_after.style.display = 'block'
    search_before.style.display = 'none'
})

// 모바일 search 검색 클릭시 나오는 팝업
user_search_detail_m.addEventListener('click',()=>{
    search_popup.style.display = 'block'
})
//위 팝업 닫기
search_popup_back.addEventListener('click',()=>{
    search_popup.style.display = 'none'
})


search_small.addEventListener('click',()=>{
    main_popup.style.display = 'block'
})

back_btn.addEventListener('click',()=>{
    main_popup.style.display = 'none'
})

let calBlean = false
calendarDate.addEventListener('click',()=>{
    calBlean = !calBlean;
    if(calBlean == true){
        calendarDate.classList.add('input_active')
        dateSelectBox.style.display = 'block'
    }else{
        calendarDate.classList.remove('input_active')
        dateSelectBox.style.display = 'none'
    }
})

let numViewBlean = false 
numView.addEventListener('click',()=>{
    numViewBlean = !numViewBlean
    if(numViewBlean == true){
        numSelect.classList.add('input_active')
        userSelect.style.display = 'block'
    }else{
        numSelect.classList.remove('input_active')
        userSelect.style.display = 'none'
    }
})
numView.addEventListener('mouseover',()=>{
    hover = !hover
    console.log(hover)
    if(hover === false){
        numView.style.backgroundColor = '#eeeeee';
        numView.style.borderRadius = '10px';
    }else{
        numView.style.backgroundColor = '#f5f5f5';
        numView.style.borderRadius = '10px';
    }
})

calendarDate.addEventListener('mouseover',()=>{
    calendarDate.classList.add('hover')
})
calendarDate.addEventListener('mouseout',()=>{
    calendarDate.classList.remove('hover')
})

// 해외 숙소 클릭 
room_btn[0].classList.add('active')
room_btn_m[0].classList.add('active')


for(let i of room_btn){
    i.addEventListener('click',()=>{
        hide(room_btn)
        i.classList.add('active')
    })
}
for(let i of room_btn_m){
    i.addEventListener('click',()=>{
        hide(room_btn_m)
        i.classList.add('active')
    })
}

more_btn.addEventListener('click',()=>{
    sub_menu_list.classList.toggle('active')
    i_rotate.classList.toggle('rotate');
})
