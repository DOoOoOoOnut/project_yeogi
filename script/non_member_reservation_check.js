//주소복사
const address_copy = document.querySelector ('.address_copy')
const copy = document.querySelector ('#copy')
console.log (address_copy, copy)

address_copy.style.display = 'none'

copy.addEventListener('click', function(){
    address_copy.style.display = 'flex'
    setTimeout(function() {
        address_copy.style.display = "none";
    }, 2000);
})

//숙소문의
const inquiry = document.querySelector ('.inquiry')

console.log (inquiry)

inquiry.addEventListener('click',()=>{
    window.alert('페이지 연결중입니다.')
})

//구매정보
const purchase_information_bg = document.querySelector ('.purchase_information .bg') 
const information_container = document.querySelector ('.information_container')
const purchase = document.querySelector ('.purchase')
console.log (purchase_information_bg, information_container, purchase)

purchase_information_bg.style.display = 'none'

purchase.addEventListener ('click', function(e){
    purchase_information_bg.style.display = 'flex'
    information_container.style.display = 'block'
    e.preventDefault()
})

//예약번호 복사
const reservation_num_copy = document.querySelector ('.reservation_num_copy')
const reservation = document.querySelector ('.reservation')
console.log (reservation_num_copy, reservation)

reservation_num_copy.style.display = 'none'

reservation.addEventListener ('click', function(){
    reservation_num_copy.style.display = 'flex'
    setTimeout(function() {
        reservation_num_copy.style.display = "none";
    }, 2000);
})

//결제증빙보기
const proof_payment_bg = document.querySelector ('.proof_payment .bg')
const proof_container = document.querySelector ('.proof_container')
const paymentview = document.querySelector ('.paymentview')
console.log (proof_payment_bg, proof_container, paymentview)

proof_payment_bg.style.display = 'none'

paymentview.addEventListener('click', function(e){
    proof_payment_bg.style.display = 'flex'
    proof_container.style.display = 'block'
    e.preventDefault()
})



//예약취소

const reservation_check_cancel_bg = document.querySelector('.reservation_check_cancel .bg')
const check_cancel = document.querySelector('.check_cancel')
const reser_cancel = document.querySelector('.reser_cancel')
const progress = document.querySelector('#progress')
console.log(reservation_check_cancel_bg, check_cancel, reser_cancel, progress)

reservation_check_cancel_bg.style.display = 'none'

reser_cancel.addEventListener('click', function(e){
    reservation_check_cancel_bg.style.display = 'flex'
    check_cancel.style.display = 'block'
    e.preventDefault()
})

progress.addEventListener('click', function(e){
    reservation_check_cancel_bg.style.display = 'none'
    check_cancel.style.display = 'none'
    window.alert('취소가 되었습니다. 2~3일내에 영업점으로 환불이 완료됩니다.')
    window.location.href ='./index.html'
})

// 방 정책
const room_policy_bg = document.querySelector ('.room_policy .bg')
const policy = document.querySelector ('.policy')
const policy_click = document.querySelector ('.policy_click')
console.log (room_policy_bg, policy, policy_click)

room_policy_bg.style.display = 'none'

policy_click.addEventListener('click', function(e){
    room_policy_bg.style.display = 'flex'
    policy.style.display = 'block'
    e.preventDefault()
})

const email = document.querySelector ('#email')
const send = document.querySelector ('#send')
console.log (email, send)


email.addEventListener('input',function(){
    // 숫자 다 쓰면 버튼 활성화
    if(this.value.length > 0){
        send.classList.add('active')
        send.disabled = false;
    // 입력 값이 공백 일 때
    }else{
        send.classList.remove('active')
        send.disabled = true;
    }
})

send.addEventListener ('click',function(){
    window.location.href ='./non_member_reservation_receipt.html'
})