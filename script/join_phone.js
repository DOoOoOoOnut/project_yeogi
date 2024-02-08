
const user_num = document.querySelectorAll('.num_input');
const send_btn = document.querySelector('#send_btn');
const next_btn = document.querySelector('#next_btn');
const error = document.querySelectorAll('.error');
const send_container = document.querySelector('.after');
const notice = document.querySelector('.title p')
console.log(user_num,error);
let back 

// 입력창
for(let i of user_num){
    // 호버 시 색 변함 / 돌아감
    i.addEventListener('mouseover',()=>{
        i.style.backgroundColor = '#ededed'
    })
    i.addEventListener('mouseout',()=>{
        i.style.backgroundColor = '#f5f5f5'
    })
    // 선택 시 디자인 변경
    i.addEventListener('focus',()=>{
        i.style.border = '1px solid #000'
        i.style.backgroundColor = '#fff'
        back = 1
    })
    i.addEventListener('blur',()=>{
        i.style.border = 'none'
        i.style.backgroundColor = '#f5f5f5'
        error[0].innerText = ''
        back = 0
    })
    // 숫자만 입력 가능
    i.addEventListener('input',(e)=>{
        e.target.value = e.target.value.replace(/\D/g, '')
    })
    
}

// 전화번호 형식만 입력가능
user_num[0].addEventListener('input',(e)=>{
    const phone_rule = /^010\d{8}$/;
    const num_rule = /^\d{4}$/;
    if(phone_rule.test(e.target.value)){
        // btn_active class로 만들어주기
        send_btn.style.backgroundColor = '#1273e4'
        send_btn.style.color = '#fff'
        send_btn.style.cursor = 'pointer'
        error[0].innerText = ''
        // 인증번호 전송 활성화
        send_btn.addEventListener('click',()=>{
            send_container.style.display = 'block'
            send_btn.style.display = 'none'
            next_btn.style.display = 'block'
            notice.innerHTML = '등록된 휴대폰 번호로 인증번호가 전송되었습니다.<br>인증번호를 입력해 주세요.'
        })
    }else{
        error[0].innerText = '휴대폰 번호를 확인해주세요.'
        user_num[0].style.border = '1px solid #f45858'
    }
})

user_num[1].addEventListener('input',(j)=>{
    const num_rule = /^\w{4}$/;
    if(num_rule.test(j.target.value)){
        //btn active
        next_btn.style.backgroundColor = '#1273e4'
        next_btn.style.color = '#fff'
        next_btn.style.cursor = 'pointer'
        error[0].innerText = ''
    }
})