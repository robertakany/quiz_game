const theQuestion = document.getElementById('question');
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const restartQuizBtn = document.getElementById("restartQuizBtn")

restartQuizBtn.style.display = 'none' 


let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let choicesElements = [];

fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
        questions = shuffleArray(data.questions); // Mélanger les questions
        showQuestion();
    });

function shuffleArray(array) {
    // Créez une copie de l'array et mélangez-la
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}   

function showQuestion() {
    if (currentQuestionIndex < 10) {
        const currentQuestion = questions[currentQuestionIndex];
        theQuestion.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";
        choicesElements = [];
        

        currentQuestion.choices.forEach((choice, index) => {
            const choiceButton = document.createElement("button");
            choiceButton.textContent = choice;
            choiceButton.className = "bg-indigo-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-4 rounded-lg";
            choiceButton.addEventListener("click", () => checkAnswer(choice, index ));
            choicesElement.appendChild(choiceButton);
            choicesElements.push(choiceButton);
            
        });
    }
    else {
        endQuiz(); 
        restartQuizBtn.style.display = 'block'
    }
}

function checkAnswer(choice, index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.correct_answer) {
        feedbackElement.textContent = "C'est correct✌🏻 ! " + currentQuestion.feedback;
        choicesElements[index].classList.add('correct-answer');
        score++;
        console.log(score)
    } else {
        feedbackElement.textContent = "C'est incorrect 🙁! " + currentQuestion.feedback;
        choicesElements[index].classList.add('incorrect-answer');
    }
    currentQuestionIndex++;
    setTimeout(showQuestion, 5000); // Ajoutez un délai pour afficher la question suivante après 1 seconde.
    
    
}

function endQuiz() {
    theQuestion.textContent = "Quiz terminé ! Votre score est de " + score + " sur " + 10;
    choicesElement.innerHTML = "";
    feedbackElement.textContent = "";
}


restartQuizBtn.addEventListener('click', showQuestion())

