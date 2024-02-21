// 이벤트
const body = document.querySelector('body, html')
const tap_contents = document.querySelectorAll('.wrap > .contents')
const tap_title = document.querySelectorAll('.tap_title')
const contents_btn = document.querySelectorAll('.wrap_btn > .btn')
const info_btn = document.querySelector('.info_btn')
const point_popup = document.querySelector('.point_popup')
const close_btn = document.querySelectorAll('.close')
const point_details_btn = document.querySelectorAll('.point_details')
const coupon_btn = document.querySelector('.coupon_btn')
const popup_bg = document.querySelectorAll('.popup_bg')
const popup_contents = document.querySelectorAll('.popup_bg > .contents')
const coupon_code_input = document.querySelector('.coupon_code_input')
const wrap_contents = document.querySelector('.wrap_contents')
const coupon_zero = document.querySelector('.coupon_zero')
const fillter_btn = document.querySelector('#fillter_btn')
const fillter_option= document.querySelector('.fillter_option')
const fillter_option_btn = document.querySelectorAll('.fillter_option > button')

console.log(tap_contents,tap_title,contents_btn)
console.log(info_btn, point_popup,close_btn,point_details_btn)
console.log(coupon_btn,popup_bg, popup_contents)
console.log(coupon_code_input,wrap_contents,coupon_zero,fillter_option,fillter_option_btn,fillter_btn)

tap_contents.forEach((t,i)=>{
    t.style.display = 'none'
})

tap_contents[0].style.display = 'block'
tap_title[0].classList.add('active')
contents_btn[0].classList.add('active_contents')
contents_btn[2].classList.add('active_contents')
point_details_btn[0].classList.add('active_point')
fillter_option_btn[1].classList.add('active_filter')


// nav
let hide = ()=>{
    for(let i of tap_title){
        i.classList.remove('active')
    }
}

// 예약
let contents_hide = ()=>{
    for(let i of contents_btn){
        i.classList.remove('active_contents')
    }
}

// 포인트
let hide_point = ()=>{
    for(let i of point_details_btn){
        i.classList.remove('active_point')
    }
}

// 쿠폰 필터
let hide_fillter = ()=>{
    for(let i of fillter_option_btn){
        i.classList.remove('active_filter')
    }
}

// contents
let not_contents = ()=>{
    tap_contents.forEach((t,i)=>{
        t.style.display = 'none'
    })
}

// nav
tap_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide()
        t.classList.add('active')
        not_contents()
        tap_contents[i].style.display= 'block'
    })
})

// 예약
for(let i of contents_btn){
    i.addEventListener('click', ()=>{
        contents_hide()
        i.classList.add('active_contents')
    })
}

point_popup.style.display = 'none';

// 포인트 info
info_btn.addEventListener('click', ()=>{
    point_popup.style.display = 'flex';
})

point_popup.addEventListener('click',function(event){
    if (event.target === this) {
        point_popup.style.display = 'none';
    }
})
close_btn[0].addEventListener('click', ()=>{
    point_popup.style.display = 'none'
})

for(let i of point_details_btn){
    i.addEventListener('click', ()=>{
        hide_point()
        i.classList.add('active_point')
    })
}

// 쿠폰 popup
popup_bg[0].style.display = 'none'

coupon_btn.addEventListener('click',()=>{
    popup_bg[0].style.display = 'flex'
})

close_btn[1].addEventListener('click',()=>{
    popup_bg[0].style.display = 'none'
})

// 쿠폰 input
coupon_code_input.addEventListener('click',()=>{
    coupon_code_input.classList.add('active_input')
})

body.addEventListener('click', function(event) {
    if (event.target !== coupon_code_input) {
        coupon_code_input.classList.remove('active_input')
    }
})

let coupon_contents = ()=>{
    wrap_contents.style.display = 'none'
    coupon_zero.style.display = 'none'
}

coupon_contents()
wrap_contents.style.display = 'block'


for(let i=2; i<8; i++){
    contents_btn[i].addEventListener('click',()=>{
        coupon_contents()
        if(i==2 || i==4){
            wrap_contents.style.display = 'block'
        }else{
            coupon_zero.style.display = 'block'
        }
    })
}

// 필터
fillter_option.style.display = 'none'
fillter_btn.addEventListener('click',()=>{
    if(fillter_option.style.display === 'none'){
        fillter_option.style.display = 'block'
    }else{fillter_option.style.display = 'none'}
})
body.addEventListener('click',function(event){
    if(event.target !== fillter_btn){
        fillter_option.style.display = 'none'
    }
})

for(let i of fillter_option_btn){
    i.addEventListener('click', function(event){
        hide_fillter()
        i.classList.add('active_filter')
        // event.stopPropagation();
        fillter_btn.innerText = this.innerText;
    })
}


// 링크 다른데서 타고 올 때
window.onload = ()=>{
    const query = new URLSearchParams(window.location.search)
    const url_coupon = query.get('coupon')
    if(url_coupon == 'coupon'){coupon_start()}
}

const coupon_start = ()=>{
    not_contents()
    tap_contents[2].style.display= 'block'
    hide()
    tap_title[2].classList.add('active')
}