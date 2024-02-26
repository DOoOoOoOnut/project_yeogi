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
const certified_btn =document.querySelector('#certified_btn')
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
const resend_btn = document.querySelector('#resend')
const user_phone_input = document.querySelectorAll('.input_wrap input')
const user_phone_btn = document.querySelectorAll('.input_wrap button')
const view_input = document.querySelectorAll('.box p input')
const check_btn = document.querySelector('#check_btn')
const countdown = document.querySelector('.countdown')
const modify_btn = document.querySelector('.modify_btn')
const all_logout_btn = document.querySelector('.all_logout_btn')
const cancellation_btn = document.querySelector('.cancellation_btn')
const storage_btn = document.querySelector('.storage_btn')
const marketing_all = document.querySelector('#morning')
const letter_btn = document.querySelector('#letter_btn')
const email_btn = document.querySelector('#email_btn')
const receive = document.querySelector('.receive')
const acceptance = document.querySelector('.acceptance')


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
    coupon_code_input.classList.add('no_hover')
    hide_error(coupon_code_input)
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
    hide_error(phone_last)
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
        checkbox.style.display = 'none'
    }
})

let hide_after = ()=>{
    after.style.display = 'none'
    resend_btn.style.display = 'none'
    check_btn.style.display = 'none'
}

let view_after = ()=>{
    after.style.display = 'block'
    resend_btn.style.display = 'block'
    check_btn.style.display = 'block'
}

hide_after()


//휴데폰 input 클릭하면 활성화
user_phone_input.forEach((t,i)=>{
    t.addEventListener('click',function(){
        t.classList.add('active')
        hide_error(t)
    })
    // 다른 곳 클릭하면 다시 비활성화
    document.addEventListener('click', function(event) {
        if (event.target !== t) {
            t.classList.remove('active')
        }
    })
})


// 휴데폰 010부터 시작
certified_btn.style.display = 'none'

user_phone_input[0].addEventListener('input',function(e){
    const phone_rule = /^010\d{8}$/;
    const phone_input_value = this.value;
    if(this.value.length > 0){
        certified_btn.style.display = 'block'
    }else{certified_btn.style.display = 'none'}
    // 숫자 다 쓰면 버튼 활성화
    if(this.value.length > 10){
        certified_btn.disabled = false;
    // 입력 값이 공백 일 때
    }else{
        certified_btn.disabled = true;
    }
    if(phone_rule.test(phone_input_value)){
        // 인증번호 전송 활성화
        certified_btn.addEventListener('click',()=>{
            view_after()
            hide_error(user_phone_input[0])
            certified_btn.style.display = 'none';
            error_message[1].innerHTML = ''
            // 이전에 실행 중인 타이머가 있다면 중지
            clearInterval(timerId);
            // 1초마다 시간을 업데이트하는 타이머 시작
            timerId = setInterval(updateTimer, 1000);
        })
    }else{
        error_message[1].innerText = '휴대폰 번호를 확인해주세요.';
        user_phone_input[0].classList.add('error_input')
    }
})

user_phone_input[1].addEventListener('input',function(){
    // 숫자 다 쓰면 버튼 활성화
    if(this.value.length > 3){
        check_btn.disabled = false;
        check_btn.classList.add('active')
    // 입력 값이 공백 일 때
    }else{
        check_btn.disabled = true;
        hide_one(check_btn)
    }
})

resend_btn.addEventListener('click',()=>{
    alert('인증번호가 전송되었습니다.')
    // 이전에 실행 중인 타이머가 있다면 중지
    clearInterval(timerId);
     // 시간 초기화
    minutes = 3;
    seconds = 0;
    countdown.textContent = `${minutes}:00`;
    // 1초마다 타이머 업데이트 함수 호출
    const timer = setInterval(updateTimer, 1000);
})

let minutes = 3;
let seconds = 0;
// 타이머 ID 저장 변수
let timerId; 

// 타이머 업데이트 함수
function updateTimer() {
    if (minutes >= 0 && seconds >= 0) {
        countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    } else {
        // 타이머가 종료되면 메시지 표시
        clearInterval(timer);
        countdown.textContent = "시간 종료";
    }
}

check_btn.addEventListener('click',()=>{
    hide_after()
    alert('저장되었습니다.')
})

modify_btn.addEventListener('click',()=>{
    alert('완료되었습니다.')
    hide_view()
    not_view.style.display = 'grid'
    hide_one(tgl_btn)
    popup_bg[2].style.display = 'none'
    view_contents.innerHTML = '가려진 내 정보를 확인할 수 있어요!'
    hide_lock()
    lock.style.display = 'block'
    checkbox.style.display = 'block'
})

popup_bg[3].style.display = 'none'
all_logout_btn.addEventListener('click', ()=>{
    popup_bg[3].style.display = 'flex'
})
cancellation_btn.addEventListener('click',()=>{
    popup_bg[3].style.display = 'none'
})
completion_btn[2].addEventListener('click',()=>{
    window.location.href = '../index.html'
})

// 설정 popup
popup_bg[4].style.display = 'none'
storage_btn.addEventListener('click',()=>{
    popup_bg[4].style.display = 'flex'
})
completion_btn[3].addEventListener('click',()=>{
    popup_bg[4].style.display = 'none'
})

// 마케팅 알림 수신 동의 체크박스 요소를 저장할 배열
const all_checkbox = [letter_btn, email_btn];

// 전체버튼
marketing_all.addEventListener('click',()=>{
    // 전체버튼이 체크되면 버튼2와 버튼3도 체크됩니다.
    if (marketing_all.checked) {
        letter_btn.checked = true;
        email_btn.checked = true;
    } else {
        // 전체버튼이 체크 해제되면 버튼2와 버튼3도 체크 해제됩니다.
        letter_btn.checked = false;
        email_btn.checked = false;
    }
})


function updata_marketing(){
    // 이메일,문자 체크박스 클릭 상태
    const email_check = email_btn.checked
    const letter_check = letter_btn.checked
    
    // 전체 체크박스가 선택된 경우
    if(email_check && letter_check){
        acceptance.textContent = '이메일, 문자'
        receive.textContent = '-'
    }else if(email_check){
        acceptance.textContent = '이메일'
        receive.textContent = '문자'
    }else if(letter_check){
        acceptance.textContent = '문자'
        receive.textContent = '이메일'
    }else{
        acceptance.textContent = '-'
        receive.textContent = '이메일, 문자'
    }
}


// 체크박스 이벤트 핸들러 등록
marketing_all.addEventListener('click', updata_marketing);
email_btn.addEventListener('click', updata_marketing);
letter_btn.addEventListener('click', updata_marketing);

// 개별 체크박스 클릭 이벤트 처리
all_checkbox.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        // 모든 체크박스가 체크되지 않은 상태이면, 전체버튼 체크박스의 체크를 해제합니다.
        if (!letter_btn.checked && !email_btn.checked) {
            marketing_all.checked = false;
        }
    });
});

letter_btn.addEventListener('click',()=>{
    // 하나라도 체크되어 있으면 전체버튼을 체크합니다.
    if(letter_btn.checked || email_btn.checked){
        marketing_all.checked = true;
    }
})

email_btn.addEventListener('click',()=>{
    // 하나라도 체크되어 있으면 전체버튼을 체크합니다.
    if(letter_btn.checked || email_btn.checked){
        marketing_all.checked = true;
    }
})


// 링크 다른데서 타고 올 때
window.onload = ()=>{
    const query = new URLSearchParams(window.location.search)
    const url_reservation = query.get('reservation')
    const url_point = query.get('point')
    const url_coupon = query.get('coupon')
    const url_info = query.get('info')
    const url_setting = query.get('setting')
    if(url_coupon == 'reservation'){reservation_start()}
    if(url_coupon == 'coupon'){coupon_start()}
    if(url_point == 'point'){point_start()}
    if(url_info == 'info'){info_start()}
    if(url_setting == 'setting'){setting_start()}
}

const reservation_start = ()=>{
    not_contents()
    tap_contents[0].style.display= 'block'
    hide(tap_title)
    tap_title[0].classList.add('active')
}
const point_start = ()=>{
    not_contents()
    tap_contents[1].style.display= 'block'
    hide(tap_title)
    tap_title[1].classList.add('active')
}
const coupon_start = ()=>{
    not_contents()
    tap_contents[2].style.display= 'block'
    hide(tap_title)
    tap_title[2].classList.add('active')
}
const info_start = ()=>{
    not_contents()
    tap_contents[3].style.display= 'block'
    hide(tap_title)
    tap_title[3].classList.add('active')
}
const setting_start = ()=>{
    not_contents()
    tap_contents[4].style.display= 'block'
    hide(tap_title)
    tap_title[4].classList.add('active')
}