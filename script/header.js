const menuBtn = document.querySelector('.menu')
const openMenu = document.querySelector('.mypage_detail')
const overTravelBtn = document.querySelector('.over_travel .prev')
const overTravelBox = document.querySelector('.over_travel_box')

console.log(menuBtn,openMenu)


openMenu.classList.add('hide')
menuBtn.addEventListener('click',()=>{
    openMenu.classList.toggle('hide')
})

let isMouseOver = false;

overTravelBtn.addEventListener('mouseenter', () => {
    overTravelBox.style.display = 'flex';
    isMouseOver = true; 
});

overTravelBox.addEventListener('mouseenter', () => {
    isMouseOver = true;
});

overTravelBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!isMouseOver) {
            overTravelBox.style.display = 'none';
        }
    }, 10);
});

overTravelBox.addEventListener('mouseleave', () => {
    isMouseOver = false;
    setTimeout(() => {
        if (!isMouseOver) {
            overTravelBox.style.display = 'none';
        }
    }, 10);
});

const mNavOpen = document.querySelector('.mypage_warp_nonmember .m_menu')
const mNavClose = document.querySelector('.nav_m .top .close')
const mNav = document.querySelector('.nav_wrap_m')

mNav.style.display = 'none'
mNavOpen.addEventListener('click',()=>{
    mNav.style.display = 'block'
})
mNavClose.addEventListener('click',()=>{
    mNav.style.display = 'none'
})

const mypage_box_m =document.querySelector('.mypage_box_m')
const mypage_warp_nonmember_m = document.querySelector('.mypage_warp_nonmember_m')


const link_info = document.querySelectorAll('.link_info')
const link_reservation = document.querySelectorAll('.link_reservation')
const link_customer_service = document.querySelectorAll('.link_customer_service')
const link_point = document.querySelectorAll('.link_point')
const link_coupon = document.querySelectorAll('.link_coupon')
const link_event = document.querySelector('.link_event')
const link_setting = document.querySelector('.link_setting')
const logout = document.querySelectorAll('.logout')
console.log(logout,mypage_box_m,mypage_warp_nonmember_m)


for(let i of link_info){
    i.addEventListener('click',()=>{
        window.location.href = '../user_info.html?info=info'
    })
}
for(let i of link_reservation){
    i.addEventListener('click',()=>{
        window.location.href = '../user_info.html?reservation=reservation'
    })
}
for(let i of link_customer_service){
    i.addEventListener('click',()=>{
        window.location.href = '../customer_service.html'
    })
}
for(let i of link_point){
    i.addEventListener('click',()=>{
        window.location.href = '../user_info.html?point=point'
    })
}
for(let i of link_coupon){
    i.addEventListener('click',()=>{
        window.location.href = '../user_info.html?coupon=coupon'
    })
}
link_event.addEventListener('click',()=>{
    window.location.href = '../event.html'
})
link_setting.addEventListener('click',()=>{
    window.location.href = '../user_info.html?setting=setting'
})
logout[1].addEventListener('click',()=>{
    mypage_box_m.style.display = 'none'
    mypage_warp_nonmember_m.style.display = 'block'
})

