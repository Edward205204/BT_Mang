let arr = [];
function displayArray() {
  const nodeList = document.querySelectorAll(".arrayDisplay");
  [...nodeList].forEach((node) => {
    node.textContent = "[" + arr.join(", ") + "]";
  });
}

function addToEnd() {
  console.log(document.querySelectorAll(".arrayDisplay"));
  let value = document.getElementById("valueInput").value;
  if (value === "") {
    alert("Vui lòng nhập giá trị!");
    return;
  }
  arr.push(value);
  displayArray();
  document.getElementById("valueInput").value = "";
}
function addToStart() {
  let value = document.getElementById("valueInput").value;
  if (value === "") {
    alert("Vui lòng nhập giá trị!");
    return;
  }
  arr.unshift(value);
  displayArray();
  document.getElementById("valueInput").value = "";
}
function addAtIndex() {
  let value = document.getElementById("valueInput").value;
  let index = document.getElementById("indexInput").value;
  arr.splice(index, 0, value);
  displayArray();
  document.getElementById("valueInput").value = "";
  document.getElementById("indexInput").value = "";
}
let numbers = [
  58, 31, 98, 82, 57, 22, 43, 73, 28, 96, 91, 68, 67, 12, 39, 7, 87, 21, 61, 67,
];
document.getElementById("numbersDisplay").textContent =
  "[" + numbers.join(", ") + "]";
function findMaxMin() {
  if (numbers.length === 0) {
    document.getElementById("maxMinResult").textContent = "Mảng rỗng!";
    return;
  }
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }
  document.getElementById("maxMinResult").textContent =
    "Số lớn nhất: " + max + " | Số nhỏ nhất: " + min;
}
function sumArray() {
  let arrNumbers = [...arr];

  let sumValue = 0;
  arrNumbers.forEach((num) => {
    sumValue += Number(num);
  });
  document.getElementById("sumResult").textContent =
    "Tổng các phần tử: " + sumValue;
}
function sortArray() {
  let arrToSort = arr;
  arrToSort.sort((a, b) => a - b);
  document.getElementById("sortedArray").textContent =
    "[" + arrToSort.join(", ") + "]";
}
function filterEvenOdd() {
  let arrFilter = arr;
  let even = arrFilter.filter((num) => num % 2 === 0);
  let odd = arrFilter.filter((num) => num % 2 !== 0);
  document.getElementById("evenOddResult").textContent =
    "Số chẵn: [" + even.join(", ") + "] | Số lẻ: [" + odd.join(", ") + "]";
}
