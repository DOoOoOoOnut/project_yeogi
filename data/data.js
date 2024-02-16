import data from "./accommodation.js"

// type 걸러주는 필터
function getAccommodationsByType(type){
    return data.filter(e=>e.type === type)
    /* return data.filter((e)=>{ 근데 보통 소괄호는 남겨놓는다고 함
        return e.type === type 
    }) */
}

// 할인혜택 걸러주는 필터
function getAccommodationsByDiscountBenefits(benefits) { //~~ 라는 함수를 만들고 benefits 매개변수를 만든다
    return data.filter( // data 배열에 있는 object를 하나씩 e 매개변수에 넣어주고 true를 반환하는 값만 추가한다.
        e => benefits.every( // benefits 배열에 있는 문자열을 benefit에 가져올건데 모든 원소에서 true가 return되면 결과로 true를 리턴한다.
            benefit => e.discount_benefit.includes(benefit) // discount_benefit 안에 benefit이 있는지 확인한다.
        )
    );
}


// search.js 에 넣을 내용
// 파일 연결이 잘 안돼서 남겨뒀음 곧 가져가겠습니다

//버튼을 누르면 필터에 맞는 결과만 출력
const check = document.querySelectorAll('.discount_chk') 
console.log(check)

for(let btn of check){
    btn.addEventListener('change',btnHandler)
}

function btnHandler(){ 
    // 1. 사용자가 무엇을 선택했는지 배열로 가져온다.
    let checkedArray = getChecked('discount')
    // 2. 위에서 가져온 배열로 데이터를 불러온다.
    const data = getAccommodationsByDiscountBenefits(checkedArray)
    console.log(data);
    // 3. 위에서 불러온 데이터를 화면에 표시한다.
    const roomTemplate = document.querySelector('#room_template')
    const page = document.querySelector('.down .page')
    console.log(page)
    page.innerHTML = ''
    for(let e of data){
        const newRoom = document.importNode(roomTemplate.content, true)
        newRoom.querySelector('.type').innerText = e.type
        newRoom.querySelector('.name').innerText = e.name
        newRoom.querySelector('.city').innerText = e.city
        newRoom.querySelector('.more').innerText = e.location
        newRoom.querySelector('.point_wrap').innerText = e.rate
        newRoom.querySelector('.review_count').innerText = e.review_count
        // newRoom.querySelector('.price_view').innerText = e.price
        if(e.is_discount){
            
        }
        newRoom.querySelector('.now').innerText = e.price - (e.price*0.2)
        if(e.stock > 10){
            newRoom.querySelector('.info').style.display = 'none'
            newRoom.querySelector('.info span').innerText = e.stock
        }
        // newRoom.querySelector('img').src = "./image~~~"
        page.appendChild(newRoom)
    }
}

function getChecked(name){
    const checked = []; // 결과 배열 / 체크한거만 들어가게
    const inputs = document.getElementsByClassName(name)[1].getElementsByTagName('input');
    for (const input of inputs) {
        if (input.checked) checked.push(input.value);
    }
    return checked
}

