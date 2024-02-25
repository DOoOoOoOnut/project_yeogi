const tap_title = document.querySelectorAll('.tap_title')
const tap_contents = document.querySelectorAll('.contents_wrap')
const title_active = document.querySelectorAll('.title_btn li')
const contents_btn = document.querySelectorAll('.btn')
const contents = document.querySelectorAll('.contents')
const i_rotate = document.querySelectorAll('i[class*=down]')
const chat_container = document.querySelector('.chat_container')
const chatting_consultation = document.querySelector('.chatting_consultation')
const chat_message = document.querySelector('.chat_message')
const chat_input = document.querySelector('.user_input input')
const chat_btn = document.querySelector('.user_input button')
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = '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'

console.log(tap_title,tap_contents,title_active)
console.log(contents,contents_btn,i_rotate)
console.log(chat_container,chatting_consultation,chat_message,chat_input,chat_btn)

// active remove
// 여러개일 때
let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

// contents
let not_contents = (name)=>{
    name.forEach((t,i)=>{
        t.style.display = 'none'
    })
}

not_contents(tap_contents)
not_contents(contents)

title_active[0].classList.add('active')
tap_contents[0].style.display = 'block'

tap_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(title_active)
        title_active[i].classList.add('active')
        not_contents(tap_contents)
        tap_contents[i].style.display = 'block'
    })
})

contents_btn.forEach((t, i) => {
    t.addEventListener('click', () => {
        if(i_rotate[i]){
            i_rotate[i].classList.toggle('rotate');
        }
        contents.forEach((content, index) => {
            if (i === index) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

// ai
chat_container.classList.add('chat_on_off')

chatting_consultation.addEventListener('click',()=>{
    chat_container.classList.toggle('chat_on_off')
    chat_container.classList.toggle('chat_show')
})

// api ai 연결
async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
		console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
    }
}

// 질문 입력후 전송 버튼 클릭
chat_btn.addEventListener('click', async () => {
    const user_message = chat_txt.value.trim();
    const message_element = document.createElement('p');
    message_element.classList.add('message', 'user_message');
    message_element.textContent = user_message;
    chat_message.appendChild(message_element);
    chat_input.value = ''; // 입력창 비우기

    // AI 응답 요청
    const ai_message = await fetchAIResponse(user_message);
    
    // AI 응답 채팅창에 표시
    const ai_message_element = document.createElement('p');
    ai_message_element.classList.add('message', 'ai_message');
    ai_message_element.textContent = ai_message;
    chat_message.appendChild(ai_message_element);
});

// Enter event
chat_input.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        chat_btn.click(); //버튼 강제 클릭
    }
})

// value 값으로 받은 메세지가 처리되는 함수
function add_message(target, contents){
    const message_element = document.createElement('div')
    message_element.classList.add('message')
    message_element.innerHTML = `${target} : ${contents}`
    chat_message.appendChild(message_element)
}