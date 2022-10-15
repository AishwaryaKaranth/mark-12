import "./styles.css";

var firstAngle = document.querySelector(".first-angle");
var secondAngle = document.querySelector(".second-angle");
var thirdAngle = document.querySelector(".third-angle");
var calculate = document.querySelector("#calculate-angle");
var isTriangle = document.querySelector(".result");

const calculateSumOfAngles = () => {
  if (
    parseInt(firstAngle.value) <= 0 ||
    parseInt(secondAngle.value) <= 0 ||
    parseInt(thirdAngle.value) <= 0
  ) {
    isTriangle.innerText =
      "Angles of the triangle cannot be less than or equal to 0!";
  } else {
    let sumOfAngles =
      parseInt(firstAngle.value) +
      parseInt(secondAngle.value) +
      parseInt(thirdAngle.value);
    sumOfAngles === 180
      ? (isTriangle.innerText = `This is a triangle!`)
      : (isTriangle.innerText = `This is not a triangle!`);
  }
};

calculate?.addEventListener("click", calculateSumOfAngles);
