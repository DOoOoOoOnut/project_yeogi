const num_btn = document.querySelectorAll('.number')
const next_contents = document.querySelector('.next_contents')
const prev_contents = document.querySelector('.prev_contents')
const next_btn = document.querySelectorAll('.next_btn')
const prev_btn = document.querySelectorAll('.prev_btn')
console.log(next_btn,next_contents,prev_contents)
console.log(num_btn)

let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

num_btn[0].classList.add('active')


for(let i of num_btn){
    i.addEventListener('click',()=>{
        hide(num_btn)
        i.classList.add('active')
    })
}

next_contents.style.display = 'none'

next_btn[0].addEventListener('click',()=>{
    next_contents.style.display = 'block'
    prev_contents.style.display = 'none'
    num_btn[5].classList.add('active')
})

prev_btn[1].addEventListener('click',()=>{
    next_contents.style.display = 'none'
    prev_contents.style.display = 'block'
})