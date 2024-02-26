const user_name = document.querySelector('#user_name');
const reset_btn = document.querySelector('.input_box_name .reset');
const error_message = document.querySelector('.error_message');

user_name.addEventListener('input', () => {
    // 입력이 시작되면 숨겨놨던 reset 클래스가 보여짐
    reset_btn.style.display = 'block';

    // 내용이 입력되면 error_border 클래스와 error_message 추가하고 에러 메시지 설정
    if (user_name.value.length === 0) {
        user_name.classList.add('error_border');
        error_message.textContent = '예약자 이름을 입력해주세요.';
    } else if (user_name.value.length < 2) {
        user_name.classList.add('error_border');
        error_message.textContent = '이름은 2자 이상 입력해주세요.';
    } else {
        // 입력이 제대로 됐을 때는 클래스 제거 및 에러 메시지 초기화
        user_name.classList.remove('error_border');
        error_message.textContent = '';
    }
});

// x 버튼 누르면 작성 문구 초기화 및 error_border와 error_messag 추가
reset_btn.addEventListener('click', () => {
    user_name.value = '';
    reset_btn.style.display = 'none';
    user_name.classList.add('error_border');
    error_message.textContent = '예약자 이름을 입력해주세요.';
    user_name.focus();
});

/* //로그인 안했을 시
const user_phone_n = document.querySelector('#user_phone_n');
const reset_btn_n = document.querySelector('.input_box_num .reset');
const error_message_n = document.querySelector('.user_phone_detail_n .error_message');

user_phone_n.addEventListener('input', () => {
    // 입력이 시작되면 숨겨놨던 reset 클래스가 보여짐
    reset_btn_n.style.display = 'block';

    // 내용이 입력되면 error_border 클래스와 error_message 클래스를 추가하고 에러 메시지 설정
    if (user_phone_n.value.length === 0) {
        user_phone_n.classList.add('error_border');
        error_message_n.textContent = '휴대폰 번호를 입력해주세요.';
    } else {
        // 입력이 제대로 됐을 때는 클래스 제거 및 에러 메시지 초기화
        user_phone_n.classList.remove('error_border');
        error_message_n.textContent = '';
    }
}); 
x 버튼 누르면 작성 문구 초기화 및 error_border 클래스와 error_message 클래스 추가/제거
reset_btn_n.addEventListener('click', () => {
    user_phone_n.value = '';
    reset_btn_n.style.display = 'none';
    user_phone_n.classList.remove('error_border');
    error_message_n.textContent = '';
}); */


//핸드폰번호

const user_phone_m = document.querySelector('#user_phone_m');
const reset_btn_m = document.querySelector('.user_phone_detail_m .reset');
const error_message_m = document.querySelector('.user_phone_detail_m .error_message');

// 숫자만 입력 가능하도록 설정
user_phone_m.addEventListener('input', () => {
    // 입력값이 변경되면 reset 버튼이 보이도록 함
    reset_btn_m.style.display = 'block';

    // 입력값에서 숫자만 추출
    let phoneNumber = user_phone_m.value.replace(/\D/g, '');

    // 숫자는 총 11자리까지만 입력 가능하도록 설정
    if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.slice(0, 11);
    }

    // 입력된 값을 다시 설정
    user_phone_m.value = phoneNumber;

    // 입력값이 유효한지 확인하여 에러 메시지 표시
    if (!phoneNumber.startsWith('010')) {
        user_phone_m.classList.add('error_border');
        error_message_m.style.display = 'block';
        error_message_m.textContent = '휴대폰 번호를 확인해주세요.';
    } else if (phoneNumber.length < 11) {
        user_phone_m.classList.add('error_border');
        error_message_m.style.display = 'block';
        error_message_m.textContent = '휴대폰 번호를 입력해주세요.';
    } else {
        user_phone_m.classList.remove('error_border');
        error_message_m.style.display = 'none';
    }
});

// reset 버튼 클릭 시 입력 내용 초기화 및 에러 메시지 표시
reset_btn_m.addEventListener('click', () => {
    user_phone_m.value = '';
    reset_btn_m.style.display = 'none';
    user_phone_m.classList.add('error_border');
    error_message_m.style.display = 'block';
    error_message_m.textContent = '휴대폰 번호를 입력해주세요.';
    user_phone_m.focus();
});

//쿠폰조회 팝업
const c_amount_check = document.querySelector('.coupon .amount_check')
const coupon_popup = document.querySelector('.coupon_popup')
const c_close = coupon_popup.querySelector('.close')
const c_down = coupon_popup.querySelector('i[class$=down]')
const detail_title = coupon_popup.querySelector('.detail_title')
const coupon_contents = coupon_popup.querySelector('.coupon_contents')
const c_apply_btn = coupon_popup.querySelector('.apply_btn')
const coupon_value = coupon_popup.querySelector('.coupon_value')
const discount = coupon_popup.querySelector('.discount')
const none = coupon_popup.querySelector('.none')
const coupon_amount = document.querySelector('.payment_amount coupon_amount')
// const discount_none = coupon_popup.querySelector('#discount_none')

c_amount_check.addEventListener('click',()=>{
    coupon_popup.style.display = 'block'
})
c_close.addEventListener('click',()=>{
    coupon_popup.style.display = 'none'
})
c_apply_btn.addEventListener('click',()=>{
    coupon_popup.style.display = 'none'
    // coupon_amount.style.display = 'block'
})
discount.addEventListener('click',()=>{
    discount.classList.add('active')
    coupon_value.innerHTML = '10,000'
})
none.addEventListener('click',()=>{
    discount.classList.remove('active')
    coupon_value.innerHTML = '0'
})
let coupon_contents_status = false //현재 상태 변수(false==숨김)
detail_title.addEventListener('click',function(){
    if(coupon_contents_status == true){
        coupon_contents_status = !coupon_contents_status
        coupon_contents.style.display = 'block';
        c_down.style.transform = 'scaleY(1)';
    }else{
        coupon_contents.style.display = 'none';
        c_down.style.transform = 'scaleY(-1)';
        coupon_contents_status = !coupon_contents_status
    }
})

//상품권 팝업
const v_amount_check = document.querySelector('.voucher .amount_check')
const voucher_popup = document.querySelector('.voucher_popup')
const v_close = voucher_popup.querySelector('.close')
const v_apply_btn = voucher_popup.querySelector('.apply_btn')

v_amount_check.addEventListener('click',()=>{
    voucher_popup.style.display = 'block'
})
v_close.addEventListener('click',()=>{
    voucher_popup.style.display = 'none'
})
v_apply_btn.addEventListener('click',()=>{
    voucher_popup.style.display = 'none'
})

//결제수단 활성화
const payment_box = document.querySelector('.payment_box')
const list = payment_box.querySelectorAll('li')
console.log(list)

// 초기로 첫 번째 li에는 benefit_active 클래스 추가
list[0].classList.add('benefit_active');

list.forEach((li, index) => {
    li.addEventListener('click', () => {
        // 클릭된 li에 benefit_active 클래스 추가
        li.classList.add('benefit_active');

        // 다른 li에는 benefit_active 클래스 제거
        list.forEach((otherLi) => {
            if (otherLi !== li) {
                otherLi.classList.remove('benefit_active');
            }
        });
    });
});

// 모두 선택 체크하면 나머지도 체크상태로 변경
const chkboxes = document.querySelectorAll('.checkbox-wrapper-4 .chk');
const essentialChk = document.querySelectorAll('.essential')

chkboxes[0].addEventListener('change',()=>{
    if(chkboxes[0].checked){
        for(let i of chkboxes){
            i.checked = true;
        }
    }else{
        for(let i of chkboxes){
            i.checked = false;
        }
    }
});

//약관동의 펼침/닫기
const more_btn = document.querySelector('.more_btn')
const down = more_btn.querySelector('i[class$=down]')
const agree_contents = document.querySelector('.agree_contents')

agree_contents.style.display = 'none';

let agree_contents_status = false //현재 상태 변수(false==숨김)
down.addEventListener('click',function(){
    if(agree_contents_status == false){
        console.log(agree_contents_status) //open
        agree_contents_status = !agree_contents_status
        agree_contents.style.display = 'block';
        down.style.transform = 'scaleY(-1)';
    }else{
        console.log(agree_contents_status) //close
        agree_contents.style.display = 'none';
        down.style.transform = 'scaleY(1)';
        agree_contents_status = !agree_contents_status
    }
})

//결제 해택 펼침/닫기
const benefit_more_btn = document.querySelector('.benefit_more_btn')
const more_down = benefit_more_btn.querySelector('i[class$=down]')
const benefit_more = document.querySelector('.benefit_more')

benefit_more.style.display = 'none';

let benefit_more_status = false //현재 상태 변수(false==숨김)
benefit_more_btn.addEventListener('click',function(){
    if(benefit_more_status == false){
        console.log(benefit_more_status) //open
        benefit_more_status = !benefit_more_status
        benefit_more.style.display = 'block';
        more_down.style.transform = 'scaleY(-1)';
    }else{
        console.log(benefit_more_status) //close
        benefit_more.style.display = 'none';
        benefit_more_status = !benefit_more_status
        more_down.style.transform = 'scaleY(1)';
    }
})

const voucher_detail = document.querySelector('.voucher_detail')
const discount_num = document.querySelector('#discount_num');
const reset_btn_v = voucher_detail.querySelector('.reset');
const amount_check_btn = voucher_detail.querySelector('.amount_check');
const error_massage_v = voucher_detail.querySelector('.popup_massage .error_massage');

// discount_num에 숫자만 입력 가능하도록 설정
discount_num.addEventListener('input', () => {
    let inputText = discount_num.value.replace(/\D/g, ''); // 숫자 이외의 문자 모두 제거
    inputText = inputText.slice(0, 16); // 최대 16자리까지 입력 허용
    discount_num.value = inputText;
    reset_btn_v.style.display = 'block'
});

// reset 버튼 클릭 시 입력 내용 초기화
reset_btn_v.addEventListener('click', () => {
    discount_num.value = ''; // 입력된 숫자 초기화
});

// amount_check_btn 버튼 클릭 시 에러 메시지 표시 및 클래스 추가
amount_check_btn.addEventListener('click', () => {
    if (discount_num.value.length !== 16) { // 숫자가 16자리가 아닌 경우
        console.log(error_massage_v)
        error_massage_v.style.display = 'block';
        error_massage_v.innerHTML = '상품권 번호 형식이 올바르지 않습니다.<br>다시 입력해주세요.';
        discount_num.classList.add('error_border');
    } else {
        // 형식이 올바른 경우
        error_massage_v.style.display = 'none';
        discount_num.classList.remove('error_border');
    }
});
