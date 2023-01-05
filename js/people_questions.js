import {people_questions} from './question_data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const imgEl = document.querySelector('.img')
const option1El = document.querySelector('.option1')
const option2El = document.querySelector('.option2')
const option3El = document.querySelector('.option3')


let currentNumber = 0 // 현재 질문의 번호
let answers = '' //고른 답

function renderQuestion(){ //질문을 하나씩 출력
    const question = people_questions[currentNumber]//답을 선택하면 다음 질문으로 넘어감
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    imgEl.innerHTML = question.img
    option1El.innerHTML = question.options[0].text
    option2El.innerHTML = question.options[1].text
    option3El.innerHTML = question.options[2].text
    progressValueEl.style.width=(currentNumber) * 25 + '%'
}

function nextQuestion(optionNumber){ //다음 질문으로 이동
    if(currentNumber === 5) {
    showResultPage()
    return
    }
    const question = people_questions[currentNumber] //option을 클릭 시 실행
    answers = answers + question.options[optionNumber].value
    currentNumber = currentNumber + 1
    renderQuestion()
}

function showResultPage(){
    location.href='/results.html?answers=' +  answers//맞힌 개수 결과 페이지로 넘김
}

option1El.addEventListener('click', function() {
    nextQuestion(0) // 0이 optionNumber 변수로 들어감
})
option2El.addEventListener('click', function() {
    nextQuestion(1)
})
option3El.addEventListener('click', function() {
    nextQuestion(2)
})

renderQuestion()