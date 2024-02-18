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
const ask_input = document.querySelector
