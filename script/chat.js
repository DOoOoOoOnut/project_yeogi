const chat_container = document.querySelector('.chat_container')
const customer_btn = document.querySelectorAll('.customer_btn')
const customer_container = document.querySelector('.customer_container')
const customer_container_m = document.querySelector('.customer_container_m')
const chat_message = document.querySelector('.chat_box')
const chat_input = document.querySelector('#user_send_message')
const chat_btn = document.querySelector('#chat_send_btn')
const chat_close_btn = document.querySelector('#chat_close_btn')
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = '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'
console.log(customer_container_m,customer_container)

chat_container.classList.remove('show')

chat_close_btn.addEventListener('click',()=>{
    chat_container.classList.remove('show')
})
customer_container.addEventListener('click',()=>{
    chat_container.classList.add('show')
})
customer_container_m.addEventListener('click',()=>{
    chat_container.classList.add('show')
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
            }],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"]
        })
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);

        if (!response.ok) {
            throw new Error(`OpenAI API 요청 실패: ${response.status}`);
        }

        const data = await response.json();

        if (!data.choices || data.choices.length === 0 || !data.choices[0].message || !data.choices[0].message.content) {
            throw new Error('올바른 응답 데이터 형식이 아닙니다.');
        }

        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
        console.error('OpenAI API 호출 중 오류 발생:', error.message);
        return '오류가 발생했습니다. 나중에 다시 시도해주세요.';
    }
}

// 질문 입력후 전송 버튼 클릭
chat_btn.addEventListener('click', async () => {
    const user_message = chat_input.value.trim();
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
chat_input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        chat_btn.click(); // 버튼 강제 클릭
    }
});

// value 값으로 받은 메세지가 처리되는 함수
function add_message(target, contents){
    const message_element = document.createElement('div')
    message_element.classList.add('message')
    message_element.innerHTML = `${target} : ${contents}`
    chat_message.appendChild(message_element)
}