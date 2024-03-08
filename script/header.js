const menuBtn = document.querySelector('.menu')
const openMenu = document.querySelector('.mypage_detail')
const overTravelBtn = document.querySelector('.over_travel .prev')
const overTravelBox = document.querySelector('.over_travel_box')
const popular_search = document.querySelector('.popular_search')
const popular_search_list = document.querySelector('.popular_search .search_list')
const top_btn = document.querySelector('.top_btn')
const top_btn_m = document.querySelector('.top_btn_m')
const link_container = document.querySelector('.link_container')

console.log(link_container)

// top버튼
top_btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, link_container.offsetTop - 50);
});

top_btn_m.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, link_container.offsetTop - 50);
});

openMenu.classList.add('hide')
menuBtn.addEventListener('click',()=>{
    openMenu.classList.toggle('hide')
    popular_search_list.style.display = 'none';
    overTravelBox.style.display = 'none';
})

let isMouseOver = false;
// 해외 여행지 클릭 시 팝업
let overblean = false
overTravelBtn.addEventListener('click', () => {
    overblean  = !overblean
    if(overblean){
        overTravelBox.style.display = 'flex';
        popular_search_list.style.display = 'none';
        openMenu.classList.add('hide')
    }else{
        overTravelBox.style.display = 'none';
    }
});
// 강릉 여행지 클릭 시 팝업
let krblean = false
popular_search.addEventListener('click', () => {
    krblean  = !krblean
    if(krblean){
        popular_search_list.style.display = 'flex';
        overTravelBox.style.display = 'none';
        openMenu.classList.add('hide')
    }else{
        popular_search_list.style.display = 'none';
    }
});

/* overTravelBox.addEventListener('mouseenter', () => {
    isMouseOver = true;
}); */

/* overTravelBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!isMouseOver) {
            overTravelBox.style.display = 'none';
        }
    }, 10);
}); */
/* 
overTravelBox.addEventListener('mouseleave', () => {
    isMouseOver = false;
    setTimeout(() => {
        if (!isMouseOver) {
            overTravelBox.style.display = 'none';
        }
    }, 10);
}); */

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

