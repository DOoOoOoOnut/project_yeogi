// 이벤트
const body = document.querySelector('body, html')
const error_message = document.querySelectorAll('.error_message')
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
const completion_btn = document.querySelectorAll('.completion_btn')
const text_delete = document.querySelectorAll('.text_delete')
const wrap_contents = document.querySelector('.wrap_contents')
const coupon_zero = document.querySelector('.coupon_zero')
const filter_btn = document.querySelector('#filter_btn')
const filter_option= document.querySelector('.filter_option')
const filter_now = document.querySelector('#filter_btn span')
const filter_option_btn = document.querySelectorAll('.filter_option > button')
const use_info = document.querySelectorAll('.use_info')
const checkbox = document.querySelector('.checkbox-wrapper-6')
const tgl_light = document.querySelector('.tgl-light')
const tgl_btn = document.querySelector('.tgl-btn')
const not_view = document.querySelector('.not_view')
const view = document.querySelector('.view')
const phone_last = document.querySelector('.phone_last')
const lock = document.querySelector('.lock')
const lock_open = document.querySelector('.lock_open')
const view_contents = document.querySelector('.view_contents')
const prev = document.querySelector('.prev')
const after = document.querySelector('.after')
const resend = document.querySelector('#resend')
const user_phone_input = document.querySelectorAll('.input_wrap input')
const user_phone_btn = document.querySelectorAll('.input_wrap button')
const view_input = document.querySelectorAll('.box p input')

console.log(tap_contents,tap_title,contents_btn)
console.log(info_btn, point_popup,close_btn,point_details_btn)
console.log(coupon_btn,popup_bg, popup_contents)
console.log(coupon_code_input,wrap_contents,coupon_zero,filter_option,filter_option_btn,filter_btn)
console.log(filter_now,completion_btn, error_message,text_delete,use_info)
console.log(checkbox,not_view,view)
console.log(phone_last)
console.log(tgl_light,tgl_btn,lock,lock_open,view_contents)
console.log(prev,after,resend, user_phone_input,view_input)

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
// 여러개일 때
let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}
// 한개일 때
let hide_one = (name) => {
    name.classList.remove('active');
}
// 
let hide_error = (name) => {
    name.classList.remove('error_input');
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

// 쿠폰 등록 popup
popup_bg[0].style.display = 'none'

coupon_btn.addEventListener('click',()=>{
    popup_bg[0].style.display = 'flex'
})

close_btn[1].addEventListener('click',()=>{
    popup_bg[0].style.display = 'none'
})

// 쿠폰 input 클릭하면 활성화
coupon_code_input.addEventListener('click',function(){
    coupon_code_input.classList.add('active')
})
// 다른 곳 클릭하면 다시 비활성화 
document.addEventListener('click', function(event) {
    if (event.target !== coupon_code_input) {
        coupon_code_input.classList.remove('active')
    }
})
// input에 글자 하나라도 쓰면 버튼 활성화
text_delete[0].style.display = 'none';

coupon_code_input.addEventListener('input',function(){
    if(this.value.length > 0){
        completion_btn[0].classList.add('active')
        completion_btn[0].disabled = false;
        text_delete[0].style.display = 'block';
    // 입력 값이 공백 일 때
    }else{
        hide_one(completion_btn[0])
        completion_btn[0].disabled = true;
        text_delete[0].style.display = 'none';
    }
})

// text_delete누르면 글자 다 지워지기
text_delete[0].addEventListener('click',()=>{
    hide_one(completion_btn[0])
    completion_btn[0].disabled = true;
    coupon_code_input.value = '';
    text_delete[0].style.display = 'none'
})

// 버튼을 누르고 내용이 틀리면 error메세지 나오기
completion_btn[0].addEventListener('click',function(event){
    if(coupon_code_input.value.trim() !== '쿠폰123456789'){
        coupon_code_input.classList.add('error_input')
        error_message[0].innerHTML = '등록할 수 없는 쿠폰이에요. 다시 확인해 주세요'
        completion_btn[0].disabled = true;
        text_delete[0].style.display = 'none'
    }else if(coupon_code_input.value.trim() === '쿠폰123456789'){
        popup_bg[0].style.display = 'none'
        alert('입력되었습니다.')
        error_message[0].innerHTML = ''
        hide_error(coupon_code_input)
        hide_one(completion_btn[0])
        completion_btn[0].disabled = true;
        coupon_code_input.value = '';
        text_delete[0].style.display = 'none'
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

// 쿠폰 popup
popup_bg[1].style.display = 'none'
for(let i of use_info){
    i.addEventListener('click',()=>{
        popup_bg[1].style.display = 'flex'
    })
}

close_btn[2].addEventListener('click',()=>{
    popup_bg[1].style.display = 'none'
})


// 내정보관리
// 내용 전부 가리기
let hide_view = ()=>{
    not_view.style.display = 'none'
    view.style.display = 'none'
}
let hide_lock = ()=>{
    lock.style.display = 'none'
    lock_open.style.display = 'none'
}
hide_view()
hide_lock()
not_view.style.display = 'grid'
popup_bg[2].style.display = 'none'
lock.style.display = 'block'

checkbox.addEventListener('click',()=>{
    if(lock.style.display === 'block'){
        popup_bg[2].style.display = 'flex'
        checkbox.style.display = 'none'
    }else{
        hide_view()
        not_view.style.display = 'grid'
        hide_one(tgl_btn)
        popup_bg[2].style.display = 'none'
        view_contents.innerHTML = '가려진 내 정보를 확인할 수 있어요!'
        hide_lock()
        lock.style.display = 'block'
    }
})

popup_bg[2].addEventListener('click', function(event) {
    if (event.target === this) {
        popup_bg[2].style.display = 'none';
    }
})

close_btn[3].addEventListener('click',()=>{
    popup_bg[2].style.display = 'none';
})

//휴데폰 input 클릭하면 활성화
phone_last.addEventListener('click',function(){
    phone_last.classList.add('active')
})
// 다른 곳 클릭하면 다시 비활성화 
document.addEventListener('click', function(event) {
    if (event.target !== phone_last) {
        phone_last.classList.remove('active')
    }
})

// input에 글자 하나라도 쓰면 버튼 활성화
text_delete[1].style.display = 'none';

phone_last.addEventListener('input',function(){
    // 숫자 하나라도 쓰면 text_delete 활성화
    if(this.value.length > 0){
        text_delete[1].style.display = 'block';
    }else{text_delete[1].style.display = 'none';}
    // 숫자 다 쓰면 버튼 활성화
    if(this.value.length > 3){
        completion_btn[1].classList.add('active')
        completion_btn[1].disabled = false;
    // 입력 값이 공백 일 때
    }else{
        hide_one(completion_btn[1])
        completion_btn[1].disabled = true;
    }
})

// text_delete누르면 글자 다 지워지기
text_delete[1].addEventListener('click',()=>{
    hide_one(completion_btn[1])
    completion_btn[1].disabled = true;
    phone_last.value = '';
    text_delete[1].style.display = 'none'
})

// 버튼을 누르고 내용이 틀리면 error메세지 나오기
completion_btn[1].addEventListener('click',function(event){
    if(phone_last.value.trim() !== '1234'){
        phone_last.classList.add('error_input')
        error_message[3].innerHTML = '번호를 다시 확인해 주세요'
        completion_btn[1].disabled = true;
        text_delete[0].style.display = 'none'
    }else if(phone_last.value.trim() === '1234'){
        popup_bg[2].style.display = 'none'
        error_message[3].innerHTML = ''
        hide_error(phone_last)
        hide_one(completion_btn[1])
        completion_btn[1].disabled = true;
        phone_last.value = '';
        text_delete[1].style.display = 'none'
        tgl_btn.classList.add('active')
        hide_view()
        view.style.display = 'grid'
        view_contents.innerHTML = '내 정보가 보여지고 있어요'
        hide_lock()
        lock_open.style.display = 'block'
    }
})

let hide_after = ()=>{
    after.style.display = 'none'
    resend.style.display = 'none'
}

let view_after = ()=>{
    after.style.display = 'block'
    resend.style.display = 'bolck'
}
hide_after()


//휴데폰 input 클릭하면 활성화
user_phone_input.forEach((t,i)=>{
    t.addEventListener('click',function(){
        t.classList.add('active')
    })
    // 다른 곳 클릭하면 다시 비활성화
})

for(let i of user_phone_input){
    i.addEventListener('click',function(){
        i.classList.add('active')
        user_phone_btn.classList.add('hide')
    })
    // 다른 곳 클릭하면 다시 비활성화 
    document.addEventListener('click', function(event) {
        if (event.target !== i) {
            i.classList.remove('active')
            user_phone_btn.classList.remove('hide')
        }
    })
}
/////////////////여기까지 하는중

// 휴데폰 010부터 시작
phone_last.addEventListener('input',function(){
    // 숫자 하나라도 쓰면 text_delete 활성화
    if(this.value.length > 0){
        text_delete[1].style.display = 'block';
    }else{text_delete[1].style.display = 'none';}
    // 숫자 다 쓰면 버튼 활성화
    if(this.value.length > 3){
        completion_btn[1].classList.add('active')
        completion_btn[1].disabled = false;
    // 입력 값이 공백 일 때
    }else{
        hide_one(completion_btn[1])
        completion_btn[1].disabled = true;
    }
})


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