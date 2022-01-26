const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('questions-container') 
const intro = document.getElementById('intro')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const feedBack = document.getElementById('feedBack')
const feedBackText = document.getElementById('feedBack-txt')

let score;
let currentQuestionIndex;
let shuffledQuestions;
let countRightAnswers;
let user;


startButton.addEventListener('click', validateName)


function validateName(){
  user = document.getElementById('userName').value; //stores user name
  if (user == ''){
    feedBackText.innerText = 'You must type your name first!';
    feedBack.classList.remove('hide');
    startButton.addEventListener('click', validateName)
  }else{
    startGame();
  }
  
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
    user = document.getElementById('userName').value; //stores user name
    score = 0;
    feedBack.classList.add('hide')
    countRightAnswers = 0;
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    intro.classList.add('hide');
    setNextQuestion();

}



function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  
}
function showQuestion(question){
  questionElement.innerText = (currentQuestionIndex+1) +'. ' + question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)    
  })
}

function resetState(){
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e) {
  const selectButton = e.target
  const correct = selectButton.dataset.correct
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (selectButton.dataset = correct){
    countRightAnswers++;
  }
  if (shuffledQuestions.length > currentQuestionIndex + 6){
    nextButton.classList.remove('hide')
  }else{
    //show score here with name
    score = (countRightAnswers * 100) / 5
    feedBack.classList.remove('hide')
    feedBackText.innerText = ('Hello again, ' + user + '! Thanks for completing the quiz, your score is: ' + score + '%')
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct){
    element.classList.add('correct')
  } else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')

}


const questions = [
  {
    question: 'When did skateboarding become an Olympic sport?',
    answers: [
      { text: '2010', correct: false },
      { text: '2016', correct: true },
      { text: '1987', correct: false },
      { text: '2021', correct: false }
      
    ]
  },
  {
    question: 'Who ollied over the largest set of stairs? ',
    answers: [
      { text: 'Aaron “Jaws” Homoki ', correct: true },
      { text: 'Luan de Oliveira', correct: false },
      { text: 'Tony Hawk', correct: false },
      { text: 'Ryan Sheckler', correct: false }
    ]
  },
  {
    question: 'Who won more SLS competitions?',
    answers: [
      { text: 'Chaz Ortiz', correct: false },
      { text: 'Chris Joslin', correct: false },
      { text: 'Nyjah Huston', correct: true },
      { text: 'Paul Rodriguez', correct: false }
    ]
  },
  {
    question: 'Which is the easiest trick?',
    answers: [
      { text: 'Flip', correct: false },
      { text: 'Ollie', correct: true },
      { text: 'Hardflip', correct: false },
      { text: 'Dolphin flip', correct: false }
    ]
  },
  {
    question: 'What does goofy mean?',
    answers: [
      { text: 'A bad skater', correct: false },
      { text: 'A skateboard trick', correct: false },
      { text: 'A "Left-hander" skater', correct: true },
      { text: 'A good skater', correct: false }
    ]
  },
  {
    question: 'Which one is not a skate brand?',
    answers: [
      { text: 'Flip', correct: false },
      { text: 'DGK', correct: false },
      { text: 'Vans', correct: false },
      { text: 'Calvin Klein', correct: true }
    ]
  },
  {
    question: 'What is the signature trick of Felipe Gustavo?',
    answers: [
      { text: '360 Flip', correct: true },
      { text: 'Heelflip', correct: false },
      { text: 'Dragonflip', correct: false },
      { text: 'Laser flip', correct: false }
    ]
  },
  {
      question: 'How many trucks does a skate have?',
      answers: [
        { text: 'Eight', correct: false },
        { text: 'Four', correct: false },
        { text: 'Six', correct: false },
        { text: 'Two', correct: true }
      ]
    },
    {
      question: 'Who won battle at the berrics 10?',
      answers: [
        { text: 'Chris Joslin', correct: true },
        { text: 'Sewa Kroetkov', correct: false },
        { text: 'Sean Malto', correct: false },
        { text: 'Cody Cepeda', correct: false }
      ]
    },
    {
      question: 'Who invented the skateboard?',
      answers: [
        { text: 'Tony Hawk', correct: false },
        { text: 'Steve Caballero', correct: false },
        { text: 'Rodney Mullen', correct: false },
        { text: 'No one knows!', correct: true }
      ]
    },
]


