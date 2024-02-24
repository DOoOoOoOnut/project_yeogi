const userInput = document.querySelectorAll('.user_input input')
const reset_btn = document.querySelectorAll('.reset_btn')
const error = document.querySelectorAll('.error')

// 이메일
// 형식에 맞지 않으면 에러메세지 출력
// 입력 시작하면 reset 버튼 나타남
let idChk = 0
let pwChk = 0

const mailChk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const pwNumChk = /^.{8,}$/


// 입력 필드에 대한 이벤트 리스너
userInput[0].addEventListener('input', () => {
    checkEmailInput()
    resetBtn[0].style.display = 'block'
    resetBtn[0].addEventListener('click',()=>{
        userInput[0].value = ''
        resetBtn[0].style.display = 'none'
    })
    if(userInput[0].value == ''){
        error[0].innerText = '이메일 주소를 입력해 주세요.';
    }
});
userInput[1].addEventListener('input', () => {
    checkPasswordInput()
    resetBtn[1].style.display = 'block'
    resetBtn[1].addEventListener('click',()=>{
        userInput[1].value = ''
        resetBtn[1].style.display = 'none'
    })
});

// 이메일 입력 검사
function checkEmailInput() {
    if (mailChk.test(userInput[0].value)) {
        error[0].innerText = '';
        userInput[0].style.border = '1.5px solid #000';
        idChk = 1;
    } else {
        error[0].innerText = '올바른 형식의 이메일 주소를 입력해 주세요.';
        userInput[0].style.border = '1.5px solid #f45858';
        idChk = 0;
    }
}

// 비밀번호 입력 검사
function checkPasswordInput() {
    if (pwNumChk.test(userInput[1].value)) {
        error[1].innerText = '';
        userInput[1].style.border = '1.5px solid #000';
        pwChk = 1;
    } else {
        error[1].innerText = '8자 이상 입력해 주세요.';
        userInput[1].style.border = '1.5px solid #f45858';
        pwChk = 0;
    }
}

// 비밀번호
// 8자 미만이면 에러메세지

// 비밀번호 확인
// 위와 동일하지 않으면 에러메세지

// 생년월일 열리는 탭 자동으로 만들어 넣기

document.addEventListener('DOMContentLoaded', () => {
    // 년도 선택을 위한 요소를 찾습니다.
    const yearSelect = document.getElementById('user_year').querySelector('.open');

    // 1900부터 2024까지의 년도를 생성합니다.
    for (let year = 2024; year >= 1900; year--) {
        // 각 년도에 대한 li 요소를 생성합니다.
        const yearOption = document.createElement('li');
        yearOption.textContent = year;
        // 생성된 li 요소를 년도 선택 요소에 추가합니다.
        yearSelect.appendChild(yearOption);
    }

    // 월 선택을 위한 요소를 찾습니다.
    const monthSelect = document.getElementById('user_month').querySelector('.open');

    // 1월부터 12월까지의 월을 생성합니다.
    for (let month = 1; month <= 12; month++) {
        // 각 월에 대한 li 요소를 생성합니다.
        const monthOption = document.createElement('li');
        monthOption.textContent = month; // 월을 표시합니다.
        // 생성된 li 요소를 월 선택 요소에 추가합니다.
        monthSelect.appendChild(monthOption);
    }

    // 일 선택을 위한 요소를 찾습니다.
    const daySelect = document.getElementById('user_day').querySelector('.open');

    // 1일부터 31일까지의 일을 생성합니다.
    for (let day = 1; day <= 31; day++) {
        // 각 일에 대한 li 요소를 생성합니다.
        const dayOption = document.createElement('li');
        dayOption.textContent = day; // 일을 표시합니다.
        // 생성된 li 요소를 일 선택 요소에 추가합니다.
        daySelect.appendChild(dayOption);
    }
});



const nowView = document.querySelectorAll('.now')
const userYear = document.querySelectorAll('.user_year .open li')
const userMonth = document.querySelectorAll('.user_month .open li')
const userDay = document.querySelectorAll('.user_day .open li')





// 닉네임
// 미리 정해 둔 3개 중 버튼 누르면 value 바뀌게

const nickname = document.querySelector('#user_nickname')
const replayBtn = document.querySelector('.replay')
console.log(replayBtn,nickname)

const nicknameArray = [
    '감동적이고평온한타래떡', '깔끔하고푸른쿠웨이트', '다정하고온화한옥수수빵','모험심있고엄청난계란말이','유쾌하고소박한적갈색', '감동적이고남다른브뤼셀그리펀'
]

replayBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * nicknameArray.length);
    const randomNickname = nicknameArray[randomIndex];
    nickname.value = randomNickname;
});

