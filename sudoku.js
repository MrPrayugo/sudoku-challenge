var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "9--2--6--",
    "-2--4--8-",
    "--7--9--3",
    "6--3--8--",
    "-5--9--1-",
    "--9--1--2",
    "2--8--9--",
    "-7--1--3-",
    "1--6--2--"
]

var solution = [
    "918273645",
    "523146789",
    "467589123",
    "641325897",
    "352798416",
    "789461352",
    "234857961",
    "876912534",
    "195634278"
]

window.onload = function() {
  setGame();
}

function setGame() {
  // Digits 1-9
  for (let i = 1; i <= 9; i++) {
      //<div id="1" class="number">1</div>
      let number = document.createElement("div");
      number.id = i
      number.innerText = i;
      // number.addEventListener("click", selectNumber);
      number.classList.add("number");
      document.getElementById("digits").appendChild(number);
  }
}
