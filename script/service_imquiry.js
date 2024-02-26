// 더보기 버튼 누르면 내용 펼쳐지고 모양 바뀜

const more_btn = document.querySelector('.btn_wrap .more_btn')
const more_contents = document.querySelector('.consent_use_more')
console.log(more_btn, more_contents)

more_contents.classList.add('hide');
more_btn.addEventListener('click',()=>{
    more_contents.classList.toggle('hide')
    if(more_contents.classList.contains('hide')){
        more_btn.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
    }else{more_btn.innerHTML = '<i class="fa-solid fa-angle-up"></i>'}
})


// 내용 입력시 버튼 활성화

const ask_btn = document.querySelector('.inquire_btn');
console.log(ask_btn)


const new_inquiries_input = document.querySelectorAll('.new_inquiries input')
console.log(new_inquiries_input)

for (let i of new_inquiries_input) {
    i.addEventListener('click', (event) => {
        // 모든 input 요소의 active 클래스를 제거합니다.
        for (let input of new_inquiries_input) {
            input.classList.remove('active');
        }
        
        // 클릭된 input 요소에만 active 클래스를 추가합니다.
        event.target.classList.add('active');
    });
}

// 문서 전체에 대한 클릭 이벤트 리스너를 등록합니다.
document.addEventListener('click', function (event) {
    // 클릭된 요소가 new_inquiries_input 목록에 포함되지 않는 경우
    if (!event.target.closest('.new_inquiries')) {
        // 모든 input 요소의 active 클래스를 제거합니다.
        for (let input of new_inquiries_input) {
            input.classList.remove('active');
        }
    }
});

new_inquiries_input.forEach(input => {
    input.addEventListener('input', () => {
        let allInputsFilled = true;

        // 각 input 요소의 값을 확인하여 빈 값이 있는지 확인합니다.
        new_inquiries_input.forEach(input => {
            if (input.value.trim() === '') {
                allInputsFilled = false;
                return;
            }
        });

        // 모든 input 요소에 값이 채워져 있으면 버튼 활성화 및 색상 변경
        // 그렇지 않으면 버튼 비활성화
        if (allInputsFilled) {
            ask_btn.disabled = false;
            ask_btn.classList.add('active');
        } else {
            ask_btn.disabled = true;
            ask_btn.classList.remove('active');
        }
    });
});