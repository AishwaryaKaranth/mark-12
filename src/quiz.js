import "./styles.css";

var formValues = document.querySelector("form");
var result = document.querySelector(".result");
var calculate = document.querySelector("#calculate-score");

const answers = {
  question1: "isosceles",
  question2: "180",
  question3: "5",
  question4: "equilateral",
  question5: "180"
};

const calculateScore = () => {
  let submittedAnswers = new FormData(formValues);
  let score = 0;

  for (let value of submittedAnswers.entries()) {
    if (answers[value[0]] === value[1].toLowerCase()) {
      score = score + 1;
    }
  }

  result.innerText = `Your score is ${score}!`;
};

calculate?.addEventListener("click", calculateScore);
