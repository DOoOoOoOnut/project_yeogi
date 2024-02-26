
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


const daysTensElement = document.getElementById('.days-tens');
const daysUnitsElement = document.getElementById('.days-units');
const hoursTensElement = document.getElementById('.hours-tens');
const hoursUnitsElement = document.getElementById('.hours-units');
const minutesTensElement = document.getElementById('.minutes-tens');
const minutesUnitsElement = document.getElementById('.minutes-units');
const secondsTensElement = document.getElementById('.seconds-tens');
const secondsUnitsElement = document.getElementById('.seconds-units');

function updateTimer() {
    // 각 시간 요소를 1씩 감소시킵니다.
    const daysTensElement = document.querySelector('.days-tens');
    const daysUnitsElement = document.querySelector('.days-units');
    const hoursTensElement = document.querySelector('.hours-tens');
    const hoursUnitsElement = document.querySelector('.hours-units');
    const minutesTensElement = document.querySelector('.minutes-tens');
    const minutesUnitsElement = document.querySelector('.minutes-units');
    const secondsTensElement = document.querySelector('.seconds-tens');
    const secondsUnitsElement = document.querySelector('.seconds-units');

    let daysTens = parseInt(daysTensElement.textContent);
    let daysUnits = parseInt(daysUnitsElement.textContent);
    let hoursTens = parseInt(hoursTensElement.textContent);
    let hoursUnits = parseInt(hoursUnitsElement.textContent);
    let minutesTens = parseInt(minutesTensElement.textContent);
    let minutesUnits = parseInt(minutesUnitsElement.textContent);
    let secondsTens = parseInt(secondsTensElement.textContent);
    let secondsUnits = parseInt(secondsUnitsElement.textContent);

    // 시간을 감소시킵니다.
    secondsUnits--;

    if (secondsUnits < 0) {
        secondsUnits = 9;
        minutesUnits--;
    }

    if (minutesUnits < 0) {
        minutesUnits = 5;
        minutesTens--;
    }

    if (minutesTens < 0) {
        minutesTens = 9;
        hoursUnits--;
    }

    if (hoursUnits < 0) {
        hoursUnits = 9;
        hoursTens--;
    }

    if (hoursTens < 0) {
        hoursTens = 2;
        daysUnits--;
    }

    if (daysUnits < 0) {
        daysUnits = 9;
        daysTens--;
    }

    // 각 시간 요소 업데이트
    daysTensElement.textContent = daysTens;
    daysUnitsElement.textContent = daysUnits;
    hoursTensElement.textContent = hoursTens;
    hoursUnitsElement.textContent = hoursUnits;
    minutesTensElement.textContent = minutesTens;
    minutesUnitsElement.textContent = minutesUnits;
    secondsTensElement.textContent = secondsTens;
    secondsUnitsElement.textContent = secondsUnits;
}

// 1초마다 updateTimer 함수를 호출하여 시간을 갱신합니다.
setInterval(updateTimer, 1000);
