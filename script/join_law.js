
// 모두 선택 체크하면 나머지도 체크상태로 변경
const chkboxes = document.querySelectorAll('.checkbox-wrapper-4 .chk');
const essentialChk = document.querySelectorAll('.essential')
const nextBtn = document.querySelector('#next_btn')

// 기존 코드
// if문에는 문제가 없으나 실행할 이벤트가 없음
/* if(chkboxes[0].checked){
    for(let chkbox of chkboxes){
        chkbox.checked = true
    }
}else{
    for(let chkbox of chkboxes){
        chkbox.checked = false
    }
} */

// 수정 코드
// 체크박스 상태가 바뀔 때 이벤트 생성, for문으로 모든 chkboxes의 체크박스 확인 후 상태 동기화
chkboxes[0].addEventListener('change',()=>{
    for(let i = 1; i < chkboxes.length; i++){
        chkboxes[i].checked = chkboxes[0].checked;
        }
});

// essential 클래스가 포함된 체크박스가 모두 체크되었을 때만 버튼 활성화

// 기존 작성 태그
// 3개 다 체크되었을 때만 버튼 활성화되어야 하나 하나만 체크되어도 활성화되는 오류

/* for(let chkbox of chkboxes){
    chkbox.addEventListener('change',()=>{
        for(let Echk of essentialChk){
            if(Echk.checked){
                nextBtn.classList.add('active')
            }else{nextBtn.classList.remove('active')}
        }
    })
} */

// 수정 코드
// 기존 코드는 for문에서 체크된 Echk를 만나면 바로 active를 추가하고 식이 끝나버리는 문제가 있었음.
// 체크 상태를 저장하는 변수를 따로 만들어 for문에서 체크되지 않은 변수를 만나면 false를 반환하게 함. 해당 변수로 if문을 작성해 3개 모두 체크 상태일 때만 버튼 active 클래스 들어가게 함.
for(let chkbox of chkboxes){
    chkbox.addEventListener('change',()=>{
        let isChecked = true
        for(let Echk of essentialChk){
            if(!Echk.checked){
                isChecked = false
            }
        }
        if(isChecked){
            nextBtn.classList.add('active')
        }else{nextBtn.classList.remove('active')}
    })
}

nextBtn.addEventListener('click',()=>{
    location.href = '../join_phone.html'
})