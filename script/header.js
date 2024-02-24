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

// mNav.style.display = 'none'

mNavOpen.addEventListener('click',()=>{
    mNav.classList.add('show')
})
mNavClose.addEventListener('click',()=>{
    mNav.classList.remove('show')
})


