const popup_btn = document.querySelector('.all_down')
const popup = document.querySelector('.popup_bg')
const body = document.querySelector('body, html')
const close_btn = document.querySelectorAll('.close')
const coupon_down = document.querySelector('.coupon_down')
console.log(coupon_down)

popup.style.display = 'none';

close_btn[0].addEventListener('click', ()=>{
    window.location.href = '../event.html'
})
coupon_down.addEventListener('click',()=>{
    window.location.href = '../user_info.html?run_script=true'
})
popup_btn.addEventListener('click', ()=>{
    popup.style.display = 'block';
    body.style.overflow = 'hidden'
})
close_btn[1].addEventListener('click',()=>{
    popup.style.display = 'none';
})
popup.addEventListener('click', function(event) {
    if (event.target === this) {
        popup.style.display = 'none';
        body.style.overflow = 'auto'
    }
})