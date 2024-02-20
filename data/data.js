import data from "./accommodation.js"

// type 걸러주는 필터
function getAccommodationsByType(type){
    return data.filter(
        e => e.type === type)
    /* return data.filter((e)=>{ 근데 보통 소괄호는 남겨놓는다고 함
        return e.type === type 
    }) */
}

// 할인혜택 걸러주는 필터
function getAccommodationsByDiscountBenefits(benefits) { //~~ 라는 함수를 만들고 benefits 매개변수를 만든다
    return data.filter( // data 배열에 있는 object를 하나씩 e 매개변수에 넣어주고 true를 반환하는 값만 추가한다.
        e => benefits.every( // benefits 배열에 있는 문자열을 benefit에 가져올건데 모든 원소에서 true가 return되면 결과로 true를 리턴한다.
            benefit => e.discount_benefit.includes(benefit) // discount_benefit 안에 benefit이 있는지 확인한다.
        )
    );
}
// #취향 걸러주는 필터
function getAccommodationsByTags(tags) {
    return data.filter(
        e => tags.every(
            tag => e.discount_benefit.includes(tag)
        )
    );
}
// 등급 걸러주는 필터
function getAccommodationsByRanks(ranks) { 
    return data.filter( 
        e => ranks.every(
            rank => e.discount_benefit.includes(rank)
        )
    );
}
// 공용시설 필터
function getAccommodationsByFacilityPublics(facility_publics) { 
    return data.filter( 
        e => facility_publics.every(
            facility_public => e.discount_benefit.includes(facility_public)
        )
    );
}
// 객실 내 시설 필터
function getAccommodationsByFacilityInsides(facility_insides) { 
    return data.filter( 
        e => facility_insides.every(
            facility_inside => e.discount_benefit.includes(facility_inside)
        )
    );
}
// 기타시설 필터
function getAccommodationsByFacilityEcts(facility_ects) { 
    return data.filter( 
        e => facility_ects.every(
            facility_ect => e.discount_benefit.includes(facility_ect)
        )
    );
}


// search.js 에 넣을 내용
// 파일 연결이 잘 안돼서 남겨뒀음 곧 가져가겠습니다

//버튼을 누르면 필터에 맞는 결과만 출력
const discount_chk = document.querySelectorAll('.discount_chk') 
const tag_check = document.querySelectorAll('.user_taste')
console.log(discount_chk, tag_check)

for(let discount_btn of discount_chk){
    discount_btn.addEventListener('change',btnHandler)
}

for(let tag_btn of tag_check){
    tag_btn.addEventListener('change',btnHandler)
}










function btnHandler(){ 
    // 1. 사용자가 무엇을 선택했는지 name으로 확인해 배열로 가져온다.
    let checkedArray = getChecked('discount')
    let checkedArray_tag = getChecked('user_taste')
    // 2. 위에서 가져온 배열로 데이터를 불러온다.
    const data = getAccommodationsByDiscountBenefits(checkedArray)
    const data_tag = getAccommodationsByTags(checkedArray_tag)
    console.log(data, data_tag);
    // 3. 위에서 불러온 데이터를 화면에 표시한다.
    const roomTemplate = document.querySelector('#room_template')
    const page = document.querySelector('.down .page')
    console.log(page)
    page.innerHTML = ''
    for(let e of data){
        const newRoom = document.importNode(roomTemplate.content, true)
        newRoom.querySelector('.type').innerText = e.type
        newRoom.querySelector('.name').innerText = e.name
        newRoom.querySelector('.city').innerText = e.city
        newRoom.querySelector('.more').innerText = e.location
        newRoom.querySelector('.point_view').innerText = `${e.rate}.${Math.floor(Math.random() * 9)}` 
        newRoom.querySelector('.review_count').innerText = (e.review_count).toLocaleString('ko-kr')
        newRoom.querySelector('.photo img').src = `./images/search/accommodation${e.pk}.jpg`
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
        page.appendChild(newRoom)
    }
    for(let e of data_tag){
        const newRoom = document.importNode(roomTemplate.content, true)
        newRoom.querySelector('.type').innerText = e.type
        newRoom.querySelector('.name').innerText = e.name
        newRoom.querySelector('.city').innerText = e.city
        newRoom.querySelector('.more').innerText = e.location
        newRoom.querySelector('.point_view').innerText = `${e.rate}.${Math.floor(Math.random() * 9)}` 
        newRoom.querySelector('.review_count').innerText = (e.review_count).toLocaleString('ko-kr')
        newRoom.querySelector('.photo img').src = `./images/search/${e.img}.jpg`
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
        // newRoom.querySelector('img').src = "./image~~~"
        page.appendChild(newRoom)
    }
}

// 체크된거 확인 함수
function getChecked(name){
    const checked = []; // 결과 배열 / 체크한거만 들어가게
    const inputs = document.getElementsByClassName(name)[1].getElementsByTagName('input');
    for (const input of inputs) {
        if (input.checked) checked.push(input.value);
    }
    return checked
}

