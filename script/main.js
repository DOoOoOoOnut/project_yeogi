import { getAccommodationsByType } from '/data/data.js';

const userSearch = document.querySelector('.user_search')
const searchInput = document.querySelector('#search_input')
const searchRanking = document.querySelector('.search_ranking')
const rank = searchRanking.querySelectorAll('li')
const span = searchRanking.querySelectorAll('li span')
const calendarDetail = document.querySelector('.calendar_detail')
const calendarDate = document.querySelector('.calendar_date')
const dateSelectBox = document.querySelector('.date_select_box')
const dateSelectTd = dateSelectBox.querySelectorAll('td')
const disabled = document.querySelectorAll('.disabled')
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
const date_select_firstday = document.querySelectorAll('.date_select_firstday')
const date_select_lastday = document.querySelectorAll('.date_select_lastday')
const total_night = document.querySelectorAll('.total_night')
const date_reset = document.querySelectorAll('.date_reset span')
const date_reset_tab = document.querySelector('.date_reset_tab')
let hover = true
// 객실 인원 증가 감소 
const num_minus_room = document.querySelectorAll('.user_room_select .num_minus')
const num_minus_adult = document.querySelectorAll('.user_adult_select .num_minus')
const num_minus_child = document.querySelectorAll('.user_children_select .num_minus')
const num_plus_room = document.querySelectorAll('.user_room_select .num_plus')
const num_plus_adult = document.querySelectorAll('.user_adult_select .num_plus')
const num_plus_child = document.querySelectorAll('.user_children_select .num_plus')
const children_notice = document.querySelectorAll('.children_notice')
const children_age = document.querySelectorAll('.children_age')
const down = document.querySelectorAll('i[class*=icon]')
const adult_num = document.querySelectorAll('.adult_num')
const room_num = document.querySelectorAll('.room_num')
const children_num = document.querySelectorAll('.children_num')
const user_children_age = document.querySelectorAll('.user_children_age')
const children_age_select = document.querySelectorAll('.children_age_select')
// const children_age_select_span = document.querySelectorAll('.children_age_select span')
const select_view = document.querySelectorAll('.select_view')
let room_count = 1
let adult_count = 2
let child_count = 0


//?
let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

// 1.국내 숙소 검색 팝업 초기 숨기기
searchRanking.style.display = 'none'

// 1-1.국내 숙소 첫번째 검색 클릭 
userSearch.addEventListener('click', function(){
    searchRanking.style.display = 'block'
})

// 1-2.다른 곳 클릭하면 다시 비활성화 
document.addEventListener('click', function(event) {
    if (!userSearch.contains(event.target)) {
        searchRanking.style.display = 'none'
    }
});

//1-3.검색 순위 클릭 시 국내&해외 숙소 값 입력
for(let i of rank) {
    i.addEventListener('click',function(){
        console.log(this.children[1].innerText)
        searchInput.value = this.children[1].innerText
        searchRanking.style.display = 'none'
        dateSelectBox.style.display = 'block'
    })
}

//2. 숙소 예약 달력
function resetCount() {
    count = 0; // count를 0으로 초기화
}

let count = 0 //0 == 날짜 선택안했을 때(초기값) //1 == 시작날짜를 선택했을 때 //2 == 종료날짜를 선택했을때(팝업닫힘)
//클릭한 td가 몇일인지??
// console.log(t.parentElement.parentElement.parentElement.title)
// console.log(`0${t.parentElement.parentElement.parentElement.title}.${t.innerText} ${t.title}`)
dateSelectTd.forEach((t) => {
    // disabled 클래스를 가진 요소에 대해 클릭 이벤트를 추가하지 않음
    if (!t.classList.contains('disabled')) {
        t.addEventListener('click', () => {
            //클릭한 td 배경색 활성화 적용
            count++; //클릭한 td 횟수 인식 변수
            let data_select = `0${t.parentElement.parentElement.parentElement.title}.${t.innerText} ${t.title}`
            if (count === 1) { // 처음 td 클릭 시 
                for (let j of dateSelectTd) {
                    j.style.backgroundColor = '#fff';
                    j.classList.remove('start_active');
                    j.classList.remove('end_active');
                }
                console.log(t)
                date_select_firstday[0].innerHTML = data_select
                date_select_firstday[1].innerHTML = data_select
                date_select_lastday[0].innerHTML = ''
                date_select_lastday[1].innerHTML = ''
                t.classList.add('start_active'); // 파랑색 활성화
                date_reset_tab.classList.add('active_tab')
            } else if (count === 2) { //두번쨰 td 클릭 시
                t.classList.add('start_active'); // 파랑색 활성화
                // 날짜를 두 개 이상 선택하면 달력 숨기기
                dateSelectBox.style.display = 'none';
                resetCount()
                date_select_lastday[0].innerHTML = data_select
                date_select_lastday[1].innerHTML = data_select
                userSelect.style.display = 'block'
            }
        });
    }
});

for(let i of date_reset){
    i.addEventListener('click',()=>{
        date_select_firstday[0].innerHTML = '03.12 화'
        date_select_firstday[1].innerHTML = '03.12 화'
        date_select_lastday[0].innerHTML = '03.13 수'
        date_select_lastday[1].innerHTML = '03.13 수'
        for (let j of dateSelectTd) {
            j.style.backgroundColor = '#fff';
            j.classList.remove('start_active');
            j.classList.remove('end_active');
        }
        dateSelectTd[16].classList.add('start_active')
        dateSelectTd[17].classList.add('end_active')
        resetCount() 
    })
}

// 2-1.다른 곳 클릭하면 다시 비활성화 
document.addEventListener('click', function(event) {
    if (!calendarDate.contains(event.target)) {
        dateSelectBox.style.display = 'none'
    }
});

dateSelectBox.addEventListener('click', function(event) {
    event.stopPropagation();
});
searchRanking.addEventListener('click', function(event) {
    event.stopPropagation();
});

// 3.인원수 체크
// 인원수 표시
// for
//아이 나이 가리기
children_notice[1].style.display = 'none'
children_age[1].style.display = 'none'
children_age[2].style.display = 'none'
console.log(children_age)
//성인, 아이, 객실 증가용 
num_plus_adult.forEach(function(t,i){
    t.addEventListener('click',function(){
        adult_count++
        this.previousElementSibling.innerHTML = adult_count
        adult_num[1].innerHTML = adult_count
    })
})
num_plus_child.forEach(function(t, i) {
    t.addEventListener('click', function() {
        if (child_count >= 2) {
            alert('최대 2명까지 예약 가능합니다.');
        } else {
            child_count++;
            this.previousElementSibling.innerHTML = child_count;
            children_notice[1].style.display = 'block';
            children_num[1].innerHTML = child_count;
            if (child_count == 1) {
                children_age[1].style.display = 'flex';
                children_age[2].style.display = 'none';
            } else if (child_count == 2) {
                children_age[2].style.display = 'flex';
            }
        }
    });
});
num_plus_room.forEach(function(t,i){
    t.addEventListener('click',function(){
        room_count++
        this.previousElementSibling.innerHTML = room_count
        room_num[1].innerHTML = room_count

    })
})
//성인, 아이, 객실 감소용
num_minus_adult.forEach(function(t,i){
    t.addEventListener('click',function(){
        if(adult_count > 1){
            adult_count--
            this.nextElementSibling.innerHTML = adult_count
            adult_num[1].innerHTML = adult_count
        }
    })
})
num_minus_child.forEach(function(t,i){
    t.addEventListener('click',function(){
        if(child_count > 0){
            child_count--
            this.nextElementSibling.innerHTML = child_count
            children_num[1].innerHTML = child_count
        }
        if(child_count == 0){
            children_notice[1].style.display = 'none'
            children_age[1].style.display = 'none'
            children_age[2].style.display = 'none'
        }
        if(child_count == 1){
            children_age[1].style.display = 'flex'
            children_age[2].style.display = 'none'
        }
        if(child_count == 2){
            children_age[1].style.display = 'flex'
            children_age[2].style.display = 'flex'
        }
        
    })
})
num_minus_room.forEach(function(t,i){
    t.addEventListener('click',function(){
        if(room_count > 1){
            room_count--
            this.nextElementSibling.innerHTML = room_count
            room_num[1].innerHTML = room_count
        }
    })
})
// 아동 나이 선택
console.log(user_children_age,children_age_select)
user_children_age.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        children_age_select[i].classList.toggle('toggle')
        down[i].classList.toggle('rotate')
    })
})

// let select_span = 0
// children_age_select_span.addEventListener('click',()=>{
//     children_age_select_span.value = select_view[0].innerHTML
// })

// 다른곳 클릭하면 비활성화(인원체크)
document.addEventListener('click', function(event) {
    if (!numView.contains(event.target)) {
        userSelect.style.display = 'none'
    }
});

numView.addEventListener('click', function(event) {
    event.stopPropagation();
});
userSelect.addEventListener('click', function(event) {
    event.stopPropagation();
});


//mobile 변수
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
calendarDetail.addEventListener('click',()=>{
    calBlean = !calBlean;
    if(calBlean == true){
        calendarDetail.classList.add('input_active')
        dateSelectBox.style.display = 'block'}
    // }else{
    //     calendarDetail.classList.remove('input_active')
    //     dateSelectBox.style.display = 'none'
    // }
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