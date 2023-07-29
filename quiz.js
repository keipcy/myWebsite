function checkAnswers() {
    let score = 0;
    // give the path to the elements of the forms using a variable
    quiz = document.forms.Quiz.elements;
    answerOne = quiz.sheffield.value;
    if (answerOne == "arcticMonkeys1") {
        // using the value element
        score = score + 1;
    }
    answerTwo = quiz.stockport.value;
    if (answerTwo == "theBlossoms") {
        score = score + 1;
    }
    alert ("Well done! Your score was " + score + " :)");
}