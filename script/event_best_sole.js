
const close_btn = document.querySelector('.close')
console.log(close_btn)

close_btn.addEventListener('click', ()=>{
    window.location.href = '../event.html'
})

let slide2 = new Swiper('.swiper-container',{
    pagination:{
        el:'.swiper-pagination'
    },
    slidesPerView: 'auto',
    mousewheel:{
        invert:true,
    },
    })

    const now = new Date();
    
    // 날짜를 가져옵니다.
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    const day = now.getDate();
    
    // 시간을 가져옵니다.
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    console.log("현재 날짜: " + year + "-" + month + "-" + day);
    console.log("현재 시간: " + hour + ":" + minute + ":" + second);