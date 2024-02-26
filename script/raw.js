let slide2 = new Swiper('.swiper-container',{
    pagination:{
        el:'.swiper-pagination'
    },
    slidesPerView: 'auto',
    mousewheel:{
        invert:true,
    },
})

const tap_title =document.querySelectorAll('.raw_t') 
const tap_content = document.querySelectorAll('.raw_c')
const prev = document.querySelectorAll('.prev')
const open = document.querySelectorAll('.open')
const i_rotate = document.querySelectorAll('i[class*=rotate')

console.log(tap_title,tap_content,prev,open,i_rotate)

let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

let not_contents = (name)=>{
    name.forEach((t,i)=>{
        t.style.display = 'none'
    })
}

not_contents(tap_content)
not_contents(open)
tap_content[0].style.display = 'block'
tap_title[0].classList.add('active')

tap_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(tap_title)
        t.classList.add('active')
        not_contents(tap_content)
        tap_content[i].style.display = 'block'
    })
})

prev.forEach((t, i) => {
    t.addEventListener('click', () => {
        if(i_rotate[i]){
            i_rotate[i].classList.toggle('rotate');
        }
        open.forEach((content, index) => {
            if (i === index) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
