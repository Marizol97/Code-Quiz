// first page button leading to question section
const startbtn= document.getElementById("start");
startbtn.addEventListener('click', start)
// end of quiz button leading to high scores page
const submitBtn=document.getElementById("submit");
submitBtn.addEventListener("click", submit);
// button returning back to first page
const homeButton=document.getElementById("goHome");
homeButton.addEventListener('click',goHome);

const viewScoresButton = document.getElementById('view');

const clearHighScoreButton= document.getElementById('clearHighScores');

clearHighScoreButton.addEventListener('click',clearHighScores);
viewScoresButton.addEventListener('click', function() {
    activeSection.style.display = 'none'
    updateHighScores()
})

function clearHighScores () {
    previousScores= []
    deleteChildren('list')
    
}
// question section is hiddent, and first page is displayed. 
// seleced answers, position, scores and initials value are reset 
function goHome (elementId){
    activeSection.style.display= 'none'
    document.getElementById('prompt').style.display='block'
    activeSection = document.getElementById('prompt')
    selectedAnswers = []
    questionPosition = 0
    lastScore = 0
    document.getElementById('intials').value = ''

}

let selectedAnswers = []
let previousScores = []

let questionPosition = 0
let lastScore = 0;
let activeSection = document.getElementById('prompt')


let questions = [
    {
        'question': 'Commonly used data types do NOT include:',
        'answers': [
            'Strings',
            'Booleans',
            'Alerts',
            'Numbers'
        ],
        'correctAnswer': 2
    },
    {
        'question': 'String values must be enclosed within ______ when being assigned to variables',
        'answers': [
            'commas',
            'curly braces',
            'quotes',
            'parenthesis'
        ],
        'correctAnswer': 2
    },
    {
        'question': 'A very useful tool used during development and debugging for printing content to the debugger is:',
        'answers': [
            'JavaScript',
            'terminal/bash',
            'for loops',
            'console.log'
        ],
        'correctAnswer': 3
    },
    {
        'question': 'The condition in an if/else statement is enclosed with:',
        'answers': [
            'quotes',
            'curly braces',
            'parenthesis',
            'square brackets'
        ],
        'correctAnswer': 1
    }
]


const buttonStyle = `
display:flex;
flex-direction: row;
line-height: 2em;
width: 25%;
margin-left: 25%;
margin-bottom: 2%;
background-color: var(--background-color);
color: azure;
font-size: 15px;
border-radius: 10px;

`
// starter button is hiding first page and displaying questions aka id: prompt
function start() {
    document.getElementById('prompt').style.display = 'none'
    document.getElementById('question-section').style.display = 'block'
    activeSection = document.getElementById('question-section')
    updateQuestion()
}
// keeps track of position with each question &
// for each question the answer buttons are deleted to reset buttons for the next question
//  buttons are created for answers
// The for loop is for a new questions and answers to appear after each click 
function updateQuestion() {
    let questionBox = document.getElementById("options")
    deleteChildren('options')
    let questionAtHand = questions[questionPosition]
    document.getElementById('question').innerText = questionAtHand.question

    for (let i = 0; i < questionAtHand.answers.length; i++) {
        let answerElement = document.createElement('button')
        answerElement.setAttribute('style', buttonStyle)
        answerElement.innerText = questionAtHand.answers[i]
        answerElement.innerText = questionAtHand.answers[i]

        questionBox.appendChild(answerElement)
       answerElement.addEventListener('click', function() {
        // selected responses are collected for each question and stored in question postion
        // 
        selectedAnswers.push(i)
        questionPosition += 1
        if (questionPosition < questions.length) {
            updateQuestion()
        } else {
            updateScoreSection() 

        }
       })
    }
}

// question section is hidden and end of quiz section displays 
// correct answers are recorded with the foor loop 

function updateScoreSection(){
    document.getElementById('question-section').style.display = 'none'
    document.getElementById('textbox').style.display = 'block'
    activeSection = document.getElementById('textbox')

    for(let i= 0; i < questions.length; i++) {
        if (selectedAnswers[i]  == questions [i] .correctAnswer) { lastScore +=1}
    }
//  final score is displayed
    document.getElementById('score').innerText = `Score: ${lastScore}/4`
}   
// once submit is clicked initials and scores are recorded and shown for the High scores page
function submit (){
    let initials = document.getElementById('intials').value
    previousScores.push({
        'initials': initials,
        'score': lastScore
    })

    // hide end of quiz and show highscores
 document.getElementById("textbox").style.display='none'
    
    updateHighScores()
}
// listItem (li) is the child for scoreList(list)
// the child (listItem) is created to display scores and initials on final page
function updateHighScores() {
    let scoreList = document.getElementById("list")
    deleteChildren('list')
    for(let i=0; i<previousScores.length; i++) {
        let listItem = document.createElement('li')
        listItem.innerText = `${previousScores[i].initials} ${previousScores[i].score}`
        listItem.setAttribute('style', 'display:block')
        scoreList.appendChild(listItem)
    }

    document.getElementById("last-page").style.display='block'
    activeSection = document.getElementById("last-page")
}

function deleteChildren(elementId) {
    var e = document.getElementById(elementId)
    
    while (e.children != null && e.children.length > 0) {
        e.removeChild(e.firstElementChild);
    }
}