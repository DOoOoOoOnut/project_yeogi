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
const filter_btn = document.querySelector('#filter_btn')
const filter_option= document.querySelector('.filter_option')
const filter_now = document.querySelector('#filter_btn span')
const filter_option_btn = document.querySelectorAll('.filter_option > button')

console.log(tap_contents,tap_title,contents_btn)
console.log(info_btn, point_popup,close_btn,point_details_btn)
console.log(coupon_btn,popup_bg, popup_contents)
console.log(coupon_code_input,wrap_contents,coupon_zero,filter_option,filter_option_btn,filter_btn)
console.log(filter_now)

tap_contents.forEach((t,i)=>{
    t.style.display = 'none'
})

tap_contents[0].style.display = 'block'
tap_title[0].classList.add('active')
contents_btn[0].classList.add('active')
contents_btn[2].classList.add('active')
point_details_btn[0].classList.add('active')
filter_option_btn[1].classList.add('active')

// active remove
let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
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
        hide(tap_title)
        t.classList.add('active')
        not_contents()
        tap_contents[i].style.display= 'block'
    })
})

// 예약
for(let i of contents_btn){
    i.addEventListener('click', ()=>{
        hide(contents_btn)
        i.classList.add('active')
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
        hide(point_details_btn)
        i.classList.add('active')
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
    coupon_code_input.classList.add('active')
})

body.addEventListener('click', function(event) {
    if (event.target !== coupon_code_input) {
        coupon_code_input.classList.remove('active')
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
filter_option.style.display = 'none'

filter_btn.addEventListener('click',function(event){
    event.stopPropagation(); 
    if(filter_option.style.display === 'none'){
        filter_option.style.display = 'flex'
    }else{filter_option.style.display = 'none'}
})

body.addEventListener('click',function(event){
    if (event.target !== filter_btn && !filter_option.contains(event.target)) {
        filter_option.style.display = 'none';
    }
})

for(let i of filter_option_btn){
    i.addEventListener('click', function(){
        hide(filter_option_btn)
        i.classList.add('active')
        filter_now.innerText = this.innerText;
        filter_option.style.display = 'none';
        console.log('.')
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
    hide(tap_title)
    tap_title[2].classList.add('active')
}