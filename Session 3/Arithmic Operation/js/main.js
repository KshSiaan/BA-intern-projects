var firstNum = document.getElementById("firstNum");
var secNum = document.getElementById("secNum");
var result = document.getElementById("result");

function initInps() {
  if (firstNum.value == "") {
    firstNum.value = "0";
  }
  if (secNum.value == "") {
    secNum.value = "0";
  }
}

document.getElementById("add").addEventListener("click", () => {
  initInps();
  let numA = parseInt(firstNum.value);
  let numB = parseInt(secNum.value);
  result.value = numA + numB;
});
document.getElementById("sub").addEventListener("click", () => {
  initInps();
  let numA = parseInt(firstNum.value);
  let numB = parseInt(secNum.value);
  result.value = numA - numB;
});
document.getElementById("multi").addEventListener("click", () => {
  initInps();
  let numA = parseInt(firstNum.value);
  let numB = parseInt(secNum.value);
  result.value = numA * numB;
});
document.getElementById("divide").addEventListener("click", () => {
  initInps();
  let numA = parseInt(firstNum.value);
  let numB = parseInt(secNum.value);
  result.value = numA / numB;
});
document.getElementById("reset").addEventListener("click", () => {
  firstNum.value = "";
  secNum.value = "";
  result.value = "";
});
