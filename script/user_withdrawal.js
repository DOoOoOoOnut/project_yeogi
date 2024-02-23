const tap_contents = document.querySelectorAll('.wrap')
const radiobox = document.querySelectorAll('.reasons input')
const contents = document.querySelectorAll('.contents')
const next_btn = document.querySelector('.next_btn')
const popup_btn = document.querySelectorAll('.popup_btn')
const popup = document.querySelector('.popup')
const close_btn = document.querySelectorAll('.close')
const checkbox = document.querySelector('#morning')
const user_bye_btn = document.querySelector('.user_bye')
const popup_bg = document.querySelector('.popup_bg')
const completion_btn = document.querySelector('.completion_btn')



tap_contents[1].style.display = 'none'

hide_contents = ()=>{
    for(let i of contents){
        i.style.display = 'none'
    }
}

// 버튼비활성화
next_btn.disabled = true;

radiobox.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide_contents()
        contents[i].style.display = 'block'
        next_btn.disabled = false;
        next_btn.classList.add('active')
    })
})

popup.style.display = 'none'
for(let i of popup_btn){
    i.addEventListener('click',()=>{
        popup.style.display = 'flex'
        setTimeout(function() {
            popup.style.display = "none";
        }, 1000);
    })
}

for(let i of close_btn){
    i.addEventListener('click',()=>{
        window.location.href = '../user_info.html?info=info'
    })
}

next_btn.addEventListener('click',()=>{
    tap_contents[0].style.display = 'none'
    tap_contents[1].style.display = 'block'
})


checkbox.addEventListener('click',()=>{
    console.log('.')
    if(checkbox.checked) {
        user_bye_btn.disabled = false;
        user_bye_btn.classList.add('active')
    }else{
        user_bye_btn.disabled = true;
        user_bye_btn.classList.remove('active')
    }
})

popup_bg.style.display ='none'
user_bye_btn.addEventListener('click',()=>{
    popup_bg.style.display = 'flex'
})

completion_btn.addEventListener('click',()=>{
    window.location.href = '../user_withdrawal_last.html'
})