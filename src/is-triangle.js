import "./styles.css";

var firstAngle = document.querySelector(".first-angle");
var secondAngle = document.querySelector(".second-angle");
var thirdAngle = document.querySelector(".third-angle");
var calculate = document.querySelector("#calculate-angle");
var isTriangle = document.querySelector(".result");

const calculateSumOfAngles = () => {
  if (
    firstAngle.value <= 0 ||
    secondAngle.value <= 0 ||
    thirdAngle.value <= 0
  ) {
    isTriangle.innerText =
      "Angles of the triangle cannot be less than or equal to 0!";
  } else {
    let sumOfAngles = firstAngle.value + secondAngle.value + thirdAngle.value;
    sumOfAngles === 180
      ? (isTriangle.innerText = `This is a triangle!`)
      : (isTriangle.innerText = `This is not a triangle!`);
  }
};

calculate?.addEventListener("click", calculateSumOfAngles);
