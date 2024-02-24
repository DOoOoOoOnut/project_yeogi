const btn = document.querySelectorAll('.btn')
const coupon = document.querySelectorAll('.coupon')

console.log(coupon,btn)



let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

let hide_contents = ()=>{
    for(let i of coupon){
        i.style.display = 'none'
    }
}

hide_contents()

btn[0].classList.add('active')
coupon[0].style.display = 'grid'

btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(btn)
        t.classList.add('active')
        hide_contents()
        if(i==0){
            coupon[0].style.display = 'grid'
        }else if(i==2 || i==3){
            coupon[1].style.display = 'grid'
        }else if(i==4){
            coupon[2].style.display = 'grid'
        }else{
            coupon[3].style.display = 'flex'
        }
    })
})
