const tap_title = document.querySelectorAll('.tap_title')
const tap_contents = document.querySelectorAll('.contents_wrap')
const title_active = document.querySelectorAll('.title_btn li')
const contents_btn = document.querySelectorAll('.btn')
const contents = document.querySelectorAll('.contents')
const i_rotate = document.querySelectorAll('i[class*=down]')
const chatting_consultation = document.querySelector('.chatting_consultation')
const chat_contents = document.querySelector('.chat_container')


// active remove
// 여러개일 때
let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

// contents
let not_contents = (name)=>{
    name.forEach((t,i)=>{
        t.style.display = 'none'
    })
}

not_contents(tap_contents)
not_contents(contents)

title_active[0].classList.add('active')
tap_contents[0].style.display = 'block'

tap_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(title_active)
        title_active[i].classList.add('active')
        not_contents(tap_contents)
        tap_contents[i].style.display = 'block'
    })
})

contents_btn.forEach((t, i) => {
    t.addEventListener('click', () => {
        if(i_rotate[i]){
            i_rotate[i].classList.toggle('rotate');
        }
        contents.forEach((content, index) => {
            if (i === index) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

// ai
document.addEventListener('DOMContentLoaded', () => {

    chatting_consultation.addEventListener('click',()=>{
        chat_container.classList.add('show')
        console.log('api')
    })
    chat_close_btn.addEventListener('click',()=>{
        chat_container.classList.remove('show')
    })
});

