
const user_num = document.querySelectorAll('.num_input');
const send_btn = document.querySelector('#send_btn');
const next_btn = document.querySelector('#next_btn');
const error = document.querySelectorAll('.error');
const send_container = document.querySelector('.after');
const notice = document.querySelector('.title p')
const reset_btn = document.querySelectorAll('.reset');
const resend_btn = document.querySelector('#resend')
console.log(user_num,error,reset_btn);
let back 

// 입력창
for(let i of user_num){
    // 숫자만 입력 가능
    i.addEventListener('input',(e)=>{
        e.target.value = e.target.value.replace(/\D/g, '')
        reset_btn.display = 'block'
    })
}

// 전화번호 형식만 입력가능
user_num[0].addEventListener('input',(e)=>{
    const phone_rule = /^010\d{8}$/;
    if(phone_rule.test(e.target.value)){
        // btn_active class로 만들어주기
        send_btn.style.backgroundColor = '#1273e4'
        send_btn.style.color = '#fff'
        send_btn.style.cursor = 'pointer'
        error[0].innerText = ''
        send_btn.disabled = false
        // 인증번호 전송 활성화
        send_btn.addEventListener('click',()=>{
            send_container.style.display = 'block'
            user_num[0].disabled = true
            user_num[0].style.border = 'none'
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
        next_btn.disabled = false
    }
})



// x 버튼 누르면 작성 문구 초기화
reset_btn.forEach((t,i)=>{
    t.style.display = 'none'
    t.addEventListener('click',()=>{
        user_num[i].value = ''
    })
})

next_btn.addEventListener('click',()=>{
    location.href = '../join_personal_info.html'
})


// 인증번호 재전송 버튼

resend_btn.addEventListener('click',()=>{
    alert('인증번호가 전송되었습니다')
})

user_num.forEach((input) => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            if (input === user_num[0]) {
                send_btn.click();
            }
            else if (input === user_num[1]) {
                next_btn.click();
            }
            event.preventDefault();
        }
    });
});