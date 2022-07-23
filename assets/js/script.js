const Answer = document.getElementById("answer-box")
const QuestionBox = document.getElementById("question-box")
const AnswerButton = document.getElementById("answer-btn")

if(AnswerButton) {
    AnswerButton.addEventListener("click", () => {
        Answer.classList.add("show-answer")
        QuestionBox.style.display = "none"
    })
}

const Button = document.getElementById("sound")

Button.addEventListener("click", () => {
    document.getElementById("car-sound").play()
})