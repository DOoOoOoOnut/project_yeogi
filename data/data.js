import data from "./accommodation.js"

/* 
1. html 태그 템플릿으로 묶고 아래부분 수정
2. 빈 배열부터 함수까지 하나의 함수로 묶기
*/


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


//버튼을 누르면 필터에 맞는 결과만 출력
const discount_chk = document.querySelectorAll('.discount_chk') 
// const tag_check = document.querySelectorAll('.user_taste')
console.log(discount_chk)

for(let discount_btn of discount_chk){
    discount_btn.addEventListener('change',btnHandler)
}

/* for(let tag_btn of tag_check){
    tag_btn.addEventListener('change',btnHandler)
} */

// 필터 버튼 배열
const Types = [
    '전체', '모텔', '호텔·리조트', '펜션', '홈&빌라', '캠핑', '게하·한옥'
]
const Tastes = [
    '#가족여행숙소', '#스파', '#파티룸', '#OTT', '#연인추천', '#감성숙소', '#뷰맛집', '#연박특가', '#리뷰좋은'
]
const Discounts = [
    '쿠폰할인', '50%페이백', '무한대실', '할인특가'
]
const Ranks = [
    '5성급', '4성급', '블랙', '풀빌라'
]
const Publics = [
    "사우나","수영장","BBQ","레스토랑","피트니스","물놀이시설","공용샤워실","공용화장실","매점"
]
const Insides = [
    "스파/월풀","객실스파","미니바","와이파이","에어컨","욕실용품","객실샤워실","개인콘센트"
]
const Etcs = [
    "조식포함","무료주차","반려견동반","사우나/찜질방","객실내취사","픽업가능","캠프파이어"
]


const newTypeEls = []
const newTasteEls = []
const newDiscountEls = []
const newRankEls = []
const newPublicEls = []
const newInsideEls = []
const newEtcEls = []


// 필터 버튼 추가하는 함수
function appendTasteChkBtn(){
    const tasteTemplate = document.querySelector('#taste_template')
    const tasteListEl = document.querySelector('#taste_list')
    for(const taste of Tastes){
        const newEl = document.importNode(tasteTemplate.content, true)// imporNode() 기준이 되는 엘리먼트
        newTasteEls.push(newEl)
        newEl.innerHTML.replace('{{taste_name}}',taste)
        newEl.addEventListener('click',filterHandler)
        tasteListEl.appendChild(newEl)
    }
}
function appendTypeChkBtn(){
    const TypeTemplate = document.querySelector('#type_template')
    const typeListEl = document.querySelector('#type_list')
    for(const type of Types){
        const newEl = document.importNode(TypeTemplate.content, true)
        newTypeEls.push(newEl)
        newEl.innerHTML.replace('{{type_name}}',type)
        newEl.addEventListener('click',filterHandler)
        typeListEl.appendChild(newEl)
    }
}
function appendDiscountChkBtn(){
    const DiscountsTemplate = document.querySelector('#discount_template')
    const discountsListEl = document.querySelector('#discount_list')
    for(const discount of Discounts){
        const newEl = document.importNode(DiscountsTemplate.content, true)
        newDiscountEls.push(newEl)
        newEl.innerHTML.replace('{{discount_name}}',discount)
        newEl.addEventListener('click',filterHandler)
        discountsListEl.appendChild(newEl)
    }
}
function appendRankChkBtn(){
    const RanksTemplate = document.querySelector('#rank_template')
    const rankListEl = document.querySelector('#rank_list')
    for(const rank of Ranks){
        const newEl = document.importNode(RanksTemplate.content, true)
        newRankEls.push(newEl)
        newEl.innerHTML.replace('{{rank_name}}',rank)
        newEl.addEventListener('click',filterHandler)
        rankListEl.appendChild(newEl)
    }
}
function appendPublicChkBtn(){
    const PublicTemplate = document.querySelector('#public_template')
    const publicsListEl = document.querySelector('#public_list')
    for(const pub of Publics){
        const newEl = document.importNode(PublicTemplate.content, true)
        newPublicEls.push(newEl)
        newEl.innerHTML.replace('{{public_name}}',pub)
        newEl.addEventListener('click',filterHandler)
        publicsListEl.appendChild(newEl)
    }
}
function appendInsideChkBtn(){
    const InsideTemplate = document.querySelector('#inside_template')
    const insideListEl = document.querySelector('#inside_list')
    for(const inside of Insides){
        const newEl = document.importNode(InsideTemplate.content, true)
        newInsideEls.push(newEl)
        newEl.innerHTML.replace('{{inside_name}}',inside)
        newEl.addEventListener('click',filterHandler)
        insideListEl.appendChild(newEl)
    }
}
function appendEtcsChkBtn(){
    const EtcTemplate = document.querySelector('#etc_template')
    const etcListEl = document.querySelector('#etc_list')
    for(const etc of Etcs){
        const newEl = document.importNode(EtcTemplate.content, true)
        newInsideEls.push(newEl)
        newEl.innerHTML.replace('{{etc_name}}',etc)
        newEl.addEventListener('click',filterHandler)
        etcListEl.appendChild(newEl)
    }
}



/* appendTasteChkBtn()
appendTypeChkBtn()
appendDiscountChkBtn()
appendRankChkBtn()
appendPublicChkBtn()
appendInsideChkBtn()
appendEtcsChkBtn()
 */



function filterHandler(){ 
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
        page.appendChild(newRoom)
    }
    /* for(let e of data_tag){
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
    } */
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

