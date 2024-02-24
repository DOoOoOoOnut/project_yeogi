
// 모두 선택 체크하면 나머지도 체크상태로 변경
const chkboxes = document.querySelectorAll('.checkbox-wrapper-4 .chk');
const essentialChk = document.querySelectorAll('.essential')
const nextBtn = document.querySelector('#next_btn')

chkboxes[0].addEventListener('change',()=>{
    for(let i = 1; i < chkboxes.length; i++){
        chkboxes[i].checked = chkboxes[0].checked;
        }
});

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