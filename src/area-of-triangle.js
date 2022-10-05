import "./styles.css";

var base = document.querySelector(".base");
var height = document.querySelector(".height");
var calculate = document.querySelector("#calculate-area-btn");
var areaOfTriangle = document.querySelector(".area");

const calculateArea = () => {
  if (base.value <= 0 || height.value <= 0) {
    areaOfTriangle.innerText =
      "Base and Height of the triangle cannot be less than or equal to 0!";
  } else {
    let area = 0.5 * base.value * height.value;
    areaOfTriangle.innerText = `Area of the triangle is ${area}`;
  }
};

calculate?.addEventListener("click", calculateArea);
