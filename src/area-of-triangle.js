import "./styles.css";

var firstSide = document.querySelector(".first-side");
var secondSide = document.querySelector(".second-side");
var result = document.querySelector(".third-side");
var calculate = document.querySelector("#calculate-hypotenuse-btn");
console.log(result);

const calculateHypotenuse = () => {
  let hypotenuse = Math.sqrt(
    Math.pow(Number(firstSide.value), 2) + Math.pow(Number(secondSide.value), 2)
  );

  result.innerText = `Hypotenuse is ${hypotenuse}`;
};

calculate?.addEventListener("click", calculateHypotenuse);
