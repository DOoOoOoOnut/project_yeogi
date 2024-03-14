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

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search_input');
    const searchRanking = document.querySelector('.search_ranking ol');

    searchRanking.addEventListener('click', function (event) {
        const clickedListItem = event.target.closest('li');

        if (clickedListItem) {
            const searchText = clickedListItem.querySelector('span').textContent;
            searchInput.value = searchText;
        }
    });
});


// 국내 숙소 검색 영역
userSearch.addEventListener('click',()=>{
    searchRanking.style.display = 'block'
})
// 국내 숙소 검색 input 벗어났을 시 숨기기
searchInput.addEventListener('blur',()=>{
    searchRanking.style.display = 'none'
})

// search_before.addEventListener('click',()=>{
//     search_after.style.display = 'block'
//     search_before.style.display = 'none'
// })

// search_change.addEventListener('click',()=>{
//     search_after.style.display = 'block'
//     search_before.style.display = 'none'
// })

const search_box = document.querySelector('.search_box_m');
const search_before = document.querySelector('.search_before')
const search_after = document.querySelector('.search_after')
const calendar_detail = document.querySelector('.calendar_detail_m');
const calendar_detail_before = document.querySelector('.calendar_date_m')
const calendar_detail_after = document.querySelector('.date_select_box_m')
const num_detail = document.querySelector('.num_detail_m');
const num_detail_before = document.querySelector('.num_view_m')
const num_detail_after = document.querySelector('.person_wrap')
console.log(search_box,calendar_detail,num_detail)
console.log(search_before,search_after)

search_box.addEventListener('click', () => {
    // 클릭 전 상태
    if (search_before.style.display = 'none') {
        search_after.style.display = 'block'
        calendar_detail_before.style.display = 'block'
        calendar_detail_after.style.display = 'none'
        num_detail_before.style.display = 'block'
        num_detail_after.style.display = 'none'
    }
});

calendar_detail.addEventListener('click', () => {
    if (calendar_detail_before.style.display = 'none') {
        calendar_detail_after.style.display = 'block'
        search_before.style.display = 'block'
        search_after.style.display = 'none'
        num_detail_before.style.display = 'block'
        num_detail_after.style.display = 'none'
    }
});

num_detail.addEventListener('click', () => {
    if (num_detail_before.style.display = 'none') {
        num_detail_after.style.display = 'block'
        search_before.style.display = 'block'
        search_after.style.display = 'none'
        calendar_detail_before.style.display = 'block'
        calendar_detail_after.style.display = 'none'
    }
});


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


// 객실 인원 증가 감소 
// const person_wrap = document.querySelectorAll('.person_wrap')
const num_minus_room = document.querySelectorAll('.user_room_select .num_minus')
const num_minus_adult = document.querySelectorAll('.user_adult_select .num_minus')
const num_minus_child = document.querySelectorAll('.user_children_select .num_minus')
const num_plus_room = document.querySelectorAll('.user_room_select .num_plus')
const num_plus_adult = document.querySelectorAll('.user_adult_select .num_plus')
const num_plus_child = document.querySelectorAll('.user_children_select .num_plus')
const children_age = document.querySelector('.children_age')
let room_count = 1
let adult_count = 2
let child_count = 0

//성인, 아이, 객실 증가용 
num_plus_adult.forEach(function(t,i){
    t.addEventListener('click',function(){
        adult_count++
        this.previousElementSibling.innerHTML = adult_count
    })
})
num_plus_child.forEach(function(t,i){
    t.addEventListener('click',function(){
        child_count++
        this.previousElementSibling.innerHTML = child_count
        // children_age.style.display = 'block'
    })
})
num_plus_room.forEach(function(t,i){
    t.addEventListener('click',function(){
        room_count++
        this.previousElementSibling.innerHTML = room_count
    })
})
//성인, 아이, 객실 감소용
num_minus_adult.forEach(function(t,i){
    t.addEventListener('click',function(){
        if(adult_count > 1){
            adult_count--
            this.nextElementSibling.innerHTML = adult_count
        }
    })
})
num_minus_child.forEach(function(t,i){
    t.addEventListener('click',function(){
        if(child_count > 0){
            child_count--
            this.nextElementSibling.innerHTML = child_count
        }
    })
})
num_minus_room.forEach(function(t,i){
    t.addEventListener('click',function(){
        if(room_count > 1){
            room_count--
            this.nextElementSibling.innerHTML = room_count
        }
    })
})


