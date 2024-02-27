import { getAccommodationsByType } from '/data/data.js';

const userSearch = document.querySelector('.user_search')
const searchInput = document.querySelector('.search_input')
const searchRanking = document.querySelector('.search_ranking')
const calendarDate = document.querySelector('.calendar_date')
const dateSelectBox = document.querySelector('.date_select_box')
const numView = document.querySelector('.num_view')
const numSelect = document.querySelector('#num_select')
const userSelect = document.querySelector('.user_select')
const search_small = document.querySelector('.search_small')
const main_popup = document.querySelector('.main_popup')
const search_popup = document.querySelector('.search_popup')
const travel_search = document.querySelector('.travel_search')
const back_btn = document.querySelector('.close_btn')
const room_btn = document.querySelectorAll('.room_btn')
let hover = true
// console.log(calendarDate,dateSelectBox,userSearch,searchRanking,numSelect,userSelect)
console.log(room_btn)

userSearch.addEventListener('click',()=>{
    searchRanking.style.display = 'block'
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

calendarDate.addEventListener('click',()=>{
    calendarDate.classList.add('input_active')
    dateSelectBox.style.display = 'block'
})

// 다른 곳 클릭하면 다시 비활성화 
document.addEventListener('click', function(event) {
    if (event.target !== calendarDate) {
        calendarDate.classList.remove('input_active')
        dateSelectBox.style.display = 'none'
    }
})

numView.addEventListener('click',()=>{
    numSelect.classList.add('input_active')
    userSelect.style.display = 'block'
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
