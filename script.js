const quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<javascript>',
        b: '<scripting>',
        c: '<script>',
        d: '<js>',
        correct: 'c'
  
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        a: '<body> section',
        b: '<head> section',
        c: '<style> section',
        d: '<body> and the <head> section',
        correct: 'd'
  
    },
    {
        question: 'Who created JavaScript',
        a: 'Rasmus Lerdorf',
        b: 'Brendan Eich',
        c: 'Guido van Rossum',
        d: 'Jordan Walke',
        correct: 'b'
  
    },
    {
        question: 'What year was JavaScript launched',
        a: '1995',
        b: '1987',
        c: '2001',
        d: '2008',
        correct: 'a'
  
    },
    {
        question: ' Does the external JavaScript file must contain the <script> tag?',
        a: 'Yes',
        b: 'It depends',
        c: 'No',
        d: 'Not necessary',
        correct: 'a'
  
    },
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');

let currentQuiz = 0;
let score = 0;


loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;
    answerEls.forEach((asnwerEl) => {
        if(asnwerEl.checked) {
            answer = asnwerEl.id
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((asnwerEl) => {
        answerEls.forEach((answerEl) => {
            asnwerEl.checked = false;
        })
    });
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer == quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly  ${score} of ${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
})