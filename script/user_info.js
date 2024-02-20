// 이벤트
const body = document.querySelector('body, html')
const tap_contents = document.querySelectorAll('.wrap > .contents')
const tap_title = document.querySelectorAll('.tap_title')
const contents_btn = document.querySelectorAll('.wrap_btn > .btn')
const info_btn = document.querySelector('.info_btn')
const point_popup = document.querySelector('.point_popup')
const close_btn = document.querySelector('.close_btn')
const point_details_btn = document.querySelectorAll('.point_details')
const coupon_btn = document.querySelector('.coupon_btn')
const popup_bg = document.querySelectorAll('.popup_bg')
const popup_contents = document.querySelectorAll('.popup_bg > .contents')

console.log(tap_contents,tap_title,contents_btn)
console.log(info_btn, point_popup,close_btn,point_details_btn)
console.log(coupon_btn,popup_bg, popup_contents)

tap_contents.forEach((t,i)=>{
    t.style.display = 'none'
})

tap_contents[0].style.display = 'block'
tap_title[0].classList.add('active')
contents_btn[0].classList.add('active_contents')
contents_btn[2].classList.add('active_contents')
point_details_btn[0].classList.add('active_point')


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
close_btn.addEventListener('click', ()=>{
    point_popup.style.display = 'none'
})

for(let i of point_details_btn){
    i.addEventListener('click', ()=>{
        hide_point()
        i.classList.add('active_point')
    })
}

// 쿠폰
coupon_btn.addEventListener('click',()=>{
    popup_bg[0].style.display = 'flex'
})

let popup_open = ()=>{
    for(let i of popup_bg){
        popup_bg[i].style.display = 'none'
    }
}
popup_open()
popup_bg[i].addEventListener('click',()=>{
    if(i === 0){
        popup_bg[i].style.display = 'flex';
    }else{
        popup_bg[i].style.display = 'none';
    }
})


popup_bg[0].addEventListener('click', ()=>{
    popup_bg[0].style.display = 'none'
})

// 이벤트
document.addEventListener('DOMContentLoaded', (event) => {
    const query = new URLSearchParams(window.location.search)
    const runScriptParam = query.get('run_script')

    if (runScriptParam === 'true') {
        run_script()
    }
})
function run_script(){
    tap_contents.forEach((t,i)=>{
        t.style.display = 'none'
    })
    
    tap_contents[2].style.display = 'block'
}