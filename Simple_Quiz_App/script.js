const questionContainer = document.querySelector(".question");
const optionContainer = document.querySelector(".option-container");
const submitButton = document.querySelector(".submit-btn");

let questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },

    {
        question: "What is the capital of i?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        questionContainer.querySelector(".question-title").textContent = currentQuestion.question;
        optionContainer.innerHTML = "";
        currentQuestion.options.forEach(option => {
            let optionElement = document.createElement("div");
            optionElement.classList.add("option");
            optionElement.textContent = option;
            optionElement.addEventListener("click", () => selectOption(option));
            optionContainer.appendChild(optionElement);

            animate(questionContainer, 'fadeIn 1s');
            animate(optionContainer, 'fadeIn 1s');
        });
    } else {
        showResult();
    }
}

function selectOption(option) {
    let currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.correctAnswer) {
        correctAnswersCount++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

function showResult() {
    questionContainer.querySelector(".question-title").textContent = "Your Result:";
    optionContainer.innerHTML = "";
    let resultElement = document.createElement("div");
    resultElement.classList.add("option");
    resultElement.textContent = `Correct Answers: ${correctAnswersCount}/${questions.length}`;
    optionContainer.appendChild(resultElement);
    submitButton.style.display = "none";
    if (winner) {
        animate(winner, 'win 2s infinite');
    }

    animate(questionContainer, 'fadeOut 1s');
    animate(optionContainer, 'fadeOut 1s');
}

function animate(element, animation) {
    element.style.animation = animation;
    element.addEventListener('animationend', () => {
        element.style.animation = '';
    });
}


displayQuestion();