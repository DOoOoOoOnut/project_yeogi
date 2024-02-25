
const user_num = document.querySelectorAll('.num_input');
const send_btn = document.querySelector('#send_btn');
const next_btn = document.querySelector('#next_btn');
const error = document.querySelectorAll('.error');
const send_container = document.querySelector('.after');
const notice = document.querySelector('.title p')
const reset_btn = document.querySelectorAll('.reset');
const resend_btn = document.querySelector('#resend')
console.log(user_num,error,reset_btn);

// 입력창
for(let i of user_num){
    // 숫자만 입력 가능
    i.addEventListener('input',(e)=>{
        e.target.value = e.target.value.replace(/\D/g, '')
        reset_btn.display = 'block'
    })
}

function startTimer() {
    let totalTime = 180; // 3분을 초 단위로 설정
    const timer = document.querySelector('.time')

    // 이미 진행 중인 타이머가 있다면 초기화
    clearInterval(window.timerInterval);

    window.timerInterval = setInterval(() => {
        totalTime -= 1;
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        
        // 타이머 요소에 시간 표시 업데이트
        timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (totalTime <= 0) {
            clearInterval(window.timerInterval); // 타이머 종료
            timer.textContent = '00:00';
            error[1].innerText = '인증시간을 초과하였습니다. 인증번호를 재전송해 주세요'
            user_num[1].style.border = '1.5px solid #f45858'
        }
    }, 1000);
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
            reset_btn[0].style.display = 'none'
            send_container.style.display = 'block'
            user_num[0].disabled = true
            user_num[0].style.border = 'none'
            send_btn.style.display = 'none'
            next_btn.style.display = 'block'
            notice.innerHTML = '등록된 휴대폰 번호로 인증번호가 전송되었습니다.<br>인증번호를 입력해 주세요.'
            
            startTimer()
        })
    }else{
        error[0].innerText = '휴대폰 번호를 확인해주세요.'
        user_num[0].style.border = '1.5px solid #f45858'
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
        t.style.display = 'none'
    })
})

user_num.forEach((t,i)=>{
    t.addEventListener('input',()=>{
        reset_btn[i].style.display = 'block'
    })
})


next_btn.addEventListener('click',()=>{
    location.href = '../join_personal_info.html'
})

// 인증번호 재전송 버튼

resend_btn.addEventListener('click',()=>{
    alert('인증번호가 전송되었습니다')
    startTimer()
})

