const NUM_QUESTIONS = 10;
let numQuestionsCompleted = 10;

const progressBarCompletion = document.getElementById("progressBarFull");

progressBarCompletion.style.width = `${
  (numQuestionsCompleted / NUM_QUESTIONS) * 19.4
}rem`;
