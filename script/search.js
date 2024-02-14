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

const swiperEl = document.querySelector('swiper-container')

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

    swiperEl.initialize();




