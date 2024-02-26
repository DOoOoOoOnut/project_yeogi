const reset_btn = document.querySelectorAll('.reset')
const user_name = document.querySelector('.user_name')

//쿠폰조회 팝업
const c_amount_check = document.querySelector('.coupon .amount_check')
const coupon_popup = document.querySelector('.coupon_popup')
const c_close = coupon_popup.querySelector('.close')
const c_down = coupon_popup.querySelector('i[class$=down]')
const detail_title = coupon_popup.querySelector('.detail_title')
const coupon_contents = coupon_popup.querySelector('.coupon_contents')
const c_apply_btn = coupon_popup.querySelector('.apply_btn')
const coupon_value = coupon_popup.querySelector('.coupon_value')
const discount = coupon_popup.querySelector('.discount')
const none = coupon_popup.querySelector('.none')
const coupon_amount = document.querySelector('.payment_amount coupon_amount')
// const discount_none = coupon_popup.querySelector('#discount_none')

c_amount_check.addEventListener('click',()=>{
    coupon_popup.style.display = 'block'
})
c_close.addEventListener('click',()=>{
    coupon_popup.style.display = 'none'
})
c_apply_btn.addEventListener('click',()=>{
    coupon_popup.style.display = 'none'
    // coupon_amount.style.display = 'block'
})
discount.addEventListener('click',()=>{
    discount.classList.add('active')
    coupon_value.innerHTML = '10,000'
})
none.addEventListener('click',()=>{
    discount.classList.remove('active')
    coupon_value.innerHTML = '0'
})
let coupon_contents_status = true //현재 상태 변수(false==숨김)
detail_title.addEventListener('click',function(){
    console.log('..')
    if(coupon_contents_status == true){
        coupon_contents_status = !coupon_contents_status
        coupon_contents.style.display = 'block';
        c_down.style.transform = 'scaleY(-1)';
    }else{
        coupon_contents.style.display = 'none';
        c_down.style.transform = 'scaleY(1)';
        coupon_contents_status = !coupon_contents_status
    }
})

//상품권 팝업
const v_amount_check = document.querySelector('.voucher .amount_check')
const voucher_popup = document.querySelector('.voucher_popup')
const v_close = voucher_popup.querySelector('.close')
const v_apply_btn = voucher_popup.querySelector('.apply_btn')

v_amount_check.addEventListener('click',()=>{
    voucher_popup.style.display = 'block'
})
v_close.addEventListener('click',()=>{
    voucher_popup.style.display = 'none'
})
v_apply_btn.addEventListener('click',()=>{
    voucher_popup.style.display = 'none'
})

//결제수단 활성화
const payment_box = document.querySelector('.payment_box')
const list = payment_box.querySelectorAll('li')
console.log(list)

list[0].classList.add('benefit_active')
list.forEach((t,i)=>{
    console.log(t,i)
    for(let l of list){l.classList.remove('benefit_active')}
        t.addEventListener('click',()=>{
            t.classList.add('benefit_active')
        })
})

// for(let l of list){
//     l.addEventListener('click',()=>{
//         l.
//     })
// }
//탭 제목 클릭시 클릭한 대상에만 디자인 적용하기

/* //기본 활성화
list[0].classList.add('benefit_active')
//클릭시 클릭한 대상에만 디자인 적용하기
for(let i=0; i<=list.length; i++){
    console.log(list[i])
    if(i<1){
        list[i].classList.add('benefit_active')
    }
} */

// 모두 선택 체크하면 나머지도 체크상태로 변경
const chkboxes = document.querySelectorAll('.checkbox-wrapper-4 .chk');
const essentialChk = document.querySelectorAll('.essential')

chkboxes[0].addEventListener('change',()=>{
    if(chkboxes[0].checked){
        for(let i of chkboxes){
            i.checked = true;
        }
    }else{
        for(let i of chkboxes){
            i.checked = false;
        }
    }
});

//약관동의 펼침/닫기
const more_btn = document.querySelector('.more_btn')
const down = more_btn.querySelector('i[class$=down]')
const agree_contents = document.querySelector('.agree_contents')

agree_contents.style.display = 'none';

let agree_contents_status = false //현재 상태 변수(false==숨김)
down.addEventListener('click',function(){
    if(agree_contents_status == false){
        console.log(agree_contents_status) //open
        agree_contents_status = !agree_contents_status
        agree_contents.style.display = 'block';
        down.style.transform = 'scaleY(-1)';
    }else{
        console.log(agree_contents_status) //close
        agree_contents.style.display = 'none';
        down.style.transform = 'scaleY(1)';
        agree_contents_status = !agree_contents_status
    }
})

//결제 해택 펼침/닫기
const benefit_more_btn = document.querySelector('.benefit_more_btn')
const more_down = benefit_more_btn.querySelector('i[class$=down]')
const benefit_more = document.querySelector('.benefit_more')

benefit_more.style.display = 'none';

let benefit_more_status = false //현재 상태 변수(false==숨김)
benefit_more_btn.addEventListener('click',function(){
    if(benefit_more_status == false){
        console.log(benefit_more_status) //open
        benefit_more_status = !benefit_more_status
        benefit_more.style.display = 'block';
        more_down.style.transform = 'scaleY(-1)';
    }else{
        console.log(benefit_more_status) //close
        benefit_more.style.display = 'none';
        benefit_more_status = !benefit_more_status
        more_down.style.transform = 'scaleY(1)';
    }
})

// x 버튼 누르면 작성 문구 초기화
/* reset_btn.forEach((t,i)=>{
    t.style.display = 'none'
    t.addEventListener('click',()=>{
        user_name[i].value = ''
        t.style.display = 'none'
    })
})

user_name.forEach((t,i)=>{
    t.addEventListener('input',()=>{
        reset_btn[i].style.display = 'block'
    })
}) */