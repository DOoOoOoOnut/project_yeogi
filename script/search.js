import { getAccommodationsByEveryFilter } from '/data/data.js';

const close_map_btn = document.querySelector('#close_map_btn');
const open_map_btn = document.querySelector('#open_map_btn');
const open_map_wrap = document.querySelector('.open_wrap');

console.log(close_map_btn, open_map_wrap, open_map_btn);

// 지도

// 초기설정
open_map_wrap.style.display = 'none'

// 지도 보기 누르면 열리기
open_map_btn.addEventListener('click',()=>{
    open_map_wrap.style.display = 'flex'
})

// x 버튼 누르면 닫히기
close_map_btn.addEventListener('click',()=>{
    open_map_wrap.style.display = 'none'
})



// 상단 필터
const filter_open = document.querySelector('.filter .open')
const filter_btn = document.querySelector('.filter .now')
const filter_now = document.querySelector('.filter .now span')
const filter = document.querySelectorAll('.filter .open button')

// 초기설정
filter_open.classList.add('hide');

// 이벤트
filter_btn.addEventListener('click',()=>{
    filter_open.classList.toggle('hide');
})

for(let i of filter){
    i.addEventListener('click',()=>{
        filter.forEach((t,i)=>{
            t.classList.remove('active');
        })
        i.classList.add('active');
        filter_now.innerText = '';
        filter_now.innerText = i.innerText;
    })
}

// 우측 필터

// 필터에 선택되어 있으면 초기화 활성화

const filter_chk = document.querySelectorAll('.chk')
const filter_reset = document.querySelectorAll('.top .reset')
console.log(filter_chk, filter_reset);

for(let i of filter_chk){
    i.addEventListener('change',()=>{
        for(let j of filter_reset){
            j.classList.add('active')
            j.addEventListener('click',()=>{
                i.checked = false;
                j.classList.remove('active');
            })
        }
    })
}

//swiper

/* const swiperEl = document.querySelector('swiper-container')

const params = {
    injectStyles: [`
        .swiper-pagination-bullet {
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: #fff;
        }

        .swiper-pagination-bullet-active {
        color: #fff;
        background: #007aff;
        }
    `],
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
}

    Object.assign(swiperEl, params)

    swiperEl.initialize(); */



//지도 api

var mapOptions = {
    center: new naver.maps.LatLng(37.70822923,128.83180095),
    zoom: 15
};

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.7911114,128.9210687),
    zoom: 15
});


// filter에서 분류된 결과가 room_container에 출력
// room_container에 있는 room의 갯수만큼 마커 생성
// 생성되는 마커에 해당하는 숙소의 위도, 경도 정보 들어가야 함.

// 마커를 추가할 위치의 배열
let markerPositions = [
    new naver.maps.LatLng(37.7911114,128.9210687),
    new naver.maps.LatLng(37.7917805,128.90719),
    new naver.maps.LatLng(37.7938531,128.906343)
];

// 각 위치에 마커를 생성하고 지도에 추가하는 함수
var markers = []; // 마커를 저장할 배열
for (var i = 0; i < markerPositions.length; i++) {
    var marker = new naver.maps.Marker({
        position: markerPositions[i],
        map: map
    });
    markers.push(marker); // 생성된 마커를 배열에 추가
}


// data.js에 있던거
// 필터 버튼 배열
const Types = [
    '전체', '모텔', '호텔·리조트', '펜션', '홈&빌라', '캠핑', '게하·한옥'
]
const Tags = [
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

class OpenFilter {
    tags = []
    types = []
    discounts = []
    ranks = []
    publics = []
    insides = []
    etcs = []

    constructor(filterTemplate, resultPage) {
        this.filterEl = document.importNode(filterTemplate.content, true);
        this.resultPage = resultPage;
        this.init();
    }

    pushHtmlCollectionToArray(src, dest) {
        for (const e of src) {
            dest.push(e);
        }
    }

    init() {
        const t = document.createElement('template');

        const tagTemplate = this.filterEl.querySelector('#tag_template')
        const tagListEl = this.filterEl.querySelector('#tag_list')
        for(const tag of Tags){
            t.innerHTML = tagTemplate.innerHTML.replaceAll('{{tag_name}}',tag); // imporNode() 기준이 되는 엘리먼트
            tagListEl.appendChild(document.importNode(t.content, true))
        }
        this.pushHtmlCollectionToArray(tagListEl.children, this.tags);

        const typeTemplate = this.filterEl.querySelector('#type_template')
        const typeListEl = this.filterEl.querySelector('#type_list')
        for(const type of Types){
            t.innerHTML = typeTemplate.innerHTML.replaceAll('{{type_name}}',type)
            const newEl = document.importNode(t.content, true)
            typeListEl.appendChild(newEl)
        }
        this.pushHtmlCollectionToArray(typeListEl.children, this.types);

        const discountsTemplate = this.filterEl.querySelector('#discount_template')
        const discountsListEl = this.filterEl.querySelector('#discount_list')
        for(const discount of Discounts){
            t.innerHTML = discountsTemplate.innerHTML.replaceAll('{{discount_name}}',discount)
            const newEl = document.importNode(t.content, true)
            discountsListEl.appendChild(newEl)
        }
        this.pushHtmlCollectionToArray(discountsListEl.children, this.discounts);

        const ranksTemplate = this.filterEl.querySelector('#rank_template')
        const rankListEl = this.filterEl.querySelector('#rank_list')
        for(const rank of Ranks){
            t.innerHTML = ranksTemplate.innerHTML.replaceAll('{{rank_name}}',rank)
            const newEl = document.importNode(t.content, true)
            rankListEl.appendChild(newEl)
        }
        this.pushHtmlCollectionToArray(rankListEl.children, this.ranks);

        const publicTemplate = this.filterEl.querySelector('#public_template')
        const publicsListEl = this.filterEl.querySelector('#public_list')
        for(const pub of Publics){
            t.innerHTML = publicTemplate.innerHTML.replaceAll('{{public_name}}',pub)
            const newEl = document.importNode(t.content, true)
            publicsListEl.appendChild(newEl)
        }
        this.pushHtmlCollectionToArray(publicsListEl.children, this.publics);

        const insideTemplate = this.filterEl.querySelector('#inside_template')
        const insideListEl = this.filterEl.querySelector('#inside_list')
        for(const inside of Insides){
            t.innerHTML = insideTemplate.innerHTML.replaceAll('{{inside_name}}',inside)
            const newEl = document.importNode(t.content, true)
            insideListEl.appendChild(newEl)
        }
        this.pushHtmlCollectionToArray(insideListEl.children, this.insides);

        const etcTemplate = this.filterEl.querySelector('#etc_template')
        const etcListEl = this.filterEl.querySelector('#etc_list')
        for(const etc of Etcs){
            t.innerHTML = etcTemplate.innerHTML.replaceAll('{{etc_name}}',etc)
            const newEl = document.importNode(t.content, true)
            etcListEl.appendChild(newEl)
        }
        this.pushHtmlCollectionToArray(etcListEl.children, this.etcs);

        const elArrays = [
            this.tags,
            this.types,
            this.discounts,
            this.ranks,
            this.publics,
            this.insides,
            this.etcs,
        ];

        for (const arr of elArrays) {
            for (const el of arr) {
                el.addEventListener('click', () => { this.filterHandler() })
            }
        }
    }

    append(container) {
        container.appendChild(this.filterEl);
    }

    filterHandler() {
        const filterValues = this.getCheckedAll();
        console.log(filterValues);
        // 2. 위에서 가져온 배열로 데이터 불러오기
        const data = getAccommodationsByEveryFilter(filterValues)
        // 3. 위에서 불러온 데이터를 화면에 표시
        const roomTemplate = document.querySelector('#room_template')
        console.log(this);
        this.resultPage.innerHTML = ''
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
            this.resultPage.appendChild(newRoom)
        }
    }

    // 확인된거 체크하는 함수
    getCheckedAll() {
        return { 
            type: this.getChecked('types'),
            benefits: this.getChecked('discounts'),
            tags: this.getChecked('tags'),
            ranks: this.getChecked('ranks'),
            facility_publics: this.getChecked('publics'),
            facility_insides: this.getChecked('insides'),
            facility_etcs: this.getChecked('etcs'),
        } 
    }

    getChecked(name) {
        const arr = this[name];
        const result = [];

        for (const el of arr) {
            const input = el.children[0];
            if (input.checked) result.push(input.value);
        }

        return result;
    }

    copyTo(dest) {
        this.filterHandler();
    }
}

const filterTemplate = document.querySelector('#filter_template');

// 메인필터의 값을 맵필터로 옮기기 위해 참조 저장
const mainFilter = new OpenFilter(filterTemplate, document.querySelector('.down .page'));
const mapFilter = new OpenFilter(filterTemplate, document.querySelector('#map_room_result'));


mainFilter.append(document.querySelector('#main_filter'));
mapFilter.append(document.querySelector('#map_filter'));

// 처음 페이지가 로딩될때 전체 검색 결과가 보여야 한다
mainFilter.filterHandler();