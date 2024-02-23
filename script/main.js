/* import data from "./accommodation.js" */

const userSearch = document.querySelector('.user_search')
const searchInput = document.querySelector('.search_input')
const searchRanking = document.querySelector('.search_ranking')
const calendarDate = document.querySelector('.calendar_date')
const dateSelectBox = document.querySelector('.date_select_box')
const numView = document.querySelector('.num_view')
const numSelect = document.querySelector('#num_select')
const userSelect = document.querySelector('.user_select')
let hover = true
console.log(calendarDate,dateSelectBox,userSearch,searchRanking,numSelect,userSelect)

userSearch.addEventListener('click',()=>{
    searchRanking.style.display = 'block'
})

//
window.addEventListener('load', function() {
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
});

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