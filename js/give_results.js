import { results, answers } from './results_date.js'

const answers = new URLSearchParams(location.search).get('answers')
console.log(answers)//결과값

//정답 갯수 세기
let count = 0;

for(let loop = 0; loop < arr.length; loop++) {
  if(answers[loop] === '답')  {
    count++;
  }
}
console.log(`count : ${count}`);

//결과값 가져오기
const results = results[count[count]]

//결과값 출력
const titleEl = document.querySelector('.title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function(boxEl, index) {
    boxEl.innerHTML = result.results[index]
})

//링크 공유 기능
function copyClipboard() {
  const text = document.getElementById('text').textContent;
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

const button = document.getElementById('button');
button.addEventListener('click', copyClipboard);