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
let hover = true


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

// 다른 곳 클릭하면 다시 비활성화 
// document.addEventListener('click', function(search) {
//     if (search.target !== userSearch) {
//         searchRanking.style.display = 'none'
//     }
// })

//
/* window.addEventListener('load', function() {
    const searchInput = document.getElementById('search_input');
    const searchResults = document.querySelector('.search_results');
    console.log(searchInput,searchResults)

    searchInput.addEventListener('input', function(){
        const searchQuery = this.value.toLowerCase();
        console.log(searchQuery)
        if (searchQuery.length === 0) {
            searchResults.innerHTML = ''; // 입력값이 없을 때 검색 결과 초기화
            return;
        }

        // 여기서 실제 검색 로직을 수행하고 결과를 동적으로 생성합니다.
        const fakeSearchResults = ['경주', '강릉', '속초', '여수', '부산', '전주', '춘천', '제주도', '포항', '대전'];
        const filteredResults = fakeSearchResults.filter(result => result.toLowerCase().includes(searchQuery));
        
        // 검색 결과를 표시합니다.
        renderResults(filteredResults);
        console.log(fakeSearchResults,filteredResults)
    });

    function renderResults(results) {
        searchResults.innerHTML = ''; // 검색 결과 초기화
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            li.addEventListener('click', function() {
                searchInput.value = result;
                searchResults.innerHTML = ''; // 검색 결과 클릭 시 초기화
            });
            searchResults.appendChild(li);
            console.log(li)
        });
    }
}); */

//

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

// 다른 곳 클릭하면 다시 비활성화 
/* document.addEventListener('click', function(event) {
    if (event.target !== calendarDate) {
        calendarDate.classList.remove('input_active')
        dateSelectBox.style.display = 'none'
    }
}) */

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
