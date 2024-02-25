// 에러 메세지

const error = document.querySelectorAll('.error_massage')
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const resetBtn = document.querySelectorAll('i[class$=xmark]')

console.log(error, userId, userPw)


resetBtn.forEach((t,i)=>{
    t.style.display = 'none'
})

let idChk = 0
let pwChk = 0

const mailChk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const pwNumChk = /^.{8,}$/


// 입력 필드에 대한 이벤트 리스너
userId.addEventListener('input', () => {
    checkEmailInput()
    resetBtn[0].style.display = 'block'
    resetBtn[0].addEventListener('click',()=>{
        userId.value = ''
        resetBtn[0].style.display = 'none'
    })
    if(userId.value == ''){
        error[0].innerText = '이메일 주소를 입력해 주세요.';
    }
});
userPw.addEventListener('input', () => {
    checkPasswordInput()
    resetBtn[1].style.display = 'block'
    resetBtn[1].addEventListener('click',()=>{
        userPw.value = ''
        resetBtn[1].style.display = 'none'
    })
});

// 이메일 입력 검사
function checkEmailInput() {
    if (mailChk.test(userId.value)) {
        error[0].innerText = '';
        userId.style.border = '1.5px solid #000';
        idChk = 1;
    } else {
        error[0].innerText = '올바른 형식의 이메일 주소를 입력해 주세요.';
        userId.style.border = '1.5px solid #f45858';
        idChk = 0;
    }
    // 로그인 버튼 업데이트 호출
    updateLoginButton();
}

// 비밀번호 입력 검사
function checkPasswordInput() {
    if (pwNumChk.test(userPw.value)) {
        error[1].innerText = '';
        userPw.style.border = '1.5px solid #000';
        pwChk = 1;
    } else {
        error[1].innerText = '8자 이상 입력해 주세요.';
        userPw.style.border = '1.5px solid #f45858';
        pwChk = 0;
    }
    // 로그인 버튼 업데이트 호출
    updateLoginButton();
}

// 로그인 버튼 상태 업데이트 함수는 그대로 유지
function updateLoginButton() {
    if (idChk && pwChk) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = '#1273e4';
        loginBtn.style.color = '#fff';
        loginBtn.style.cursor = 'pointer';
    } else {
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = '';
        loginBtn.style.color = '';
        loginBtn.style.cursor = '';
    }
}

// 초기 로그인 버튼 상태 업데이트
updateLoginButton();

loginBtn.addEventListener('click',()=>{
    alert('로그인 완료되었습니다')
    location.href = './index.html'
})